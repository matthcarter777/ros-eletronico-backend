import { Request, Response } from 'express';

import IndexRosService from '@modules/ros/services/admin/IndexRosService';
import CreateRosService from '@modules/ros/services/admin/CreateRosService';

export default class AdminRosController {

  async index(_request: Request, response: Response) {
    const indexRosService = new IndexRosService();
    
    const ros = await indexRosService.execute();

    response.status(200).send(ros);
  }

  async create(request: Request, response: Response) {
    const { 
      observer_id, 
      date, 
      local_id, 
      zone_id, 
      company_area, 
      nature_id, 
      reason_id,
      description,
      suggestion,
      isAvail_responsible,
      company_id,
      manager_id,
      shift_id,
      responsible_id,
      status,
      negotiations,
      estimated_date_finish,
      responsible_area_id
    } = request.body;

    const createRosService = new CreateRosService();

    await createRosService.execute({
      observer_id, 
      date, 
      local_id, 
      zone_id, 
      company_area, 
      nature_id, 
      reason_id,
      description,
      suggestion,
      isAvail_responsible,
      company_id,
      manager_id,
      shift_id,
      responsible_id,
      status,
      negotiations,
      estimated_date_finish,
      responsible_area_id
    })

    return response.status(200).send({ok: true});
  }
}