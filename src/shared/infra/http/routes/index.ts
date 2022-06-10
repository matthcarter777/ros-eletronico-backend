import { Router, Response, Request } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import userSessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import rolesSessionsRouter from '@modules/users/infra/http/routes/roles.routes';
import forgotRouter from '@modules/users/infra/http/routes/forgot.routes';

export const router = Router();

/* User */
router.use('/users', usersRouter);
router.use('/login', userSessionsRouter);
router.use('/roles', rolesSessionsRouter);
router.use('/forgotpassword', forgotRouter);


router.get('/api', (_request: Request, response: Response) => {
  response.status(200).json('Itafos ROS API');
});
