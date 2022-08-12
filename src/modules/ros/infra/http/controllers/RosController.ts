import { Request, Response } from 'express';

import CreateRosService from '@modules/ros/services/CreateRosService';

export default class RosController {

  async create(request: Request, response: Response) {
    const {       
      name,
      date,
      local,
      zone,
      nature,
      reason,
      companyArea,
      description,
      suggestion,
      isAvail 
    } = request.body;

    const createRosService = new CreateRosService();

    const ros = await createRosService.execute({
      name,
      date,
      local,
      zone,
      nature,
      reason,
      companyArea,
      description,
      suggestion,
      isAvail 
    });


    return response.status(201).json(ros);
  }
}