import { Request, Response } from 'express';

import IndexRosService from '@modules/ros/services/admin/IndexRosService';

export default class AdminRosController {

  async index(_request: Request, response: Response) {
    const indexRosService = new IndexRosService();
    
    const ros = await indexRosService.execute();

    response.status(200).send(ros);
  }
}