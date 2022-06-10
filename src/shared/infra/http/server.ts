import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import http from 'http';
import https from 'https';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

import './../typeorm/index';
import { router } from '../http/routes/index';
import { AppError } from '../../errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.APP_PORT || 3333;

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
  if(err instanceof AppError ) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  console.log(err);

  return response.status(500).json({
    status: "Error",
    message: `Internal server error ${err.message}`,
  });
});

if (process.env.APP_ENV === 'production') {
  const privateKeyPath = path.resolve(__dirname, '..', '..', '..', '..', 'cert', 'private.key');
  const certificatePath = path.resolve(__dirname, '..', '..', '..', '..', 'cert', 'certificate.crt');

  const privateKey = fs.readFileSync(privateKeyPath, 'utf-8');
  const certificate = fs.readFileSync(certificatePath, 'utf-8');

  const credentials = { key: privateKey, cert: certificate };

  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(port, () => {
    console.log(`HTTPS Server started on port ${port}`)
  })
} else {
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`HTTP Server started on port ${port}`);
  });
}
