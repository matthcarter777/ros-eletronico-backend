import { Request, Response } from 'express';

import IndexRosService from '@modules/ros/services/responsible/IndexRosService';
import ShowRosService from '@modules/ros/services/admin/ShowRosService';

export default class RosResponsibleController {

  async index(request: Request, response: Response) {
    const { id }  = request.user;

    const indexRosService = new IndexRosService();
    
    const ros = await indexRosService.execute(id);

    response.status(200).send(ros);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const showRosService = new ShowRosService();
    
    const ros = await showRosService.execute(id);

    response.status(200).send(ros);
  }

}
