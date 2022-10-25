import { Request, Response } from 'express';

import IndexRosService from '@modules/ros/services/admin/IndexRosService';
import ShowRosService from '@modules/ros/services/admin/ShowRosService';
import CreateRosService from '@modules/ros/services/admin/CreateRosService';
import UpdateRosService from '@modules/ros/services/admin/UpdateRosService';
import ProcessRosService from '@modules/ros/services/admin/ProcessRosService';
import FinishRosService from '@modules/ros/services/admin/FinishRosService';
import GoToExcelRosService from '@modules/ros/services/admin/GoToExcelRosService';

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

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const showRosService = new ShowRosService();
    
    const ros = await showRosService.execute(id);

    response.status(200).send(ros);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { 
      company_id, 
      manager_id, 
      responsible_id, 
      responsible_area_id, 
      shift_id, 
      estimated_date_finish
    } = request.body;

    const updateRosService = new UpdateRosService();

    await updateRosService.execute({
      id,
      company_id, 
      manager_id, 
      responsible_id, 
      responsible_area_id, 
      shift_id, 
      estimated_date_finish
     });

    return response.status(200).send({message: 'Ros Updated'})
  }

  async processRos(request: Request, response: Response) {
    const { id } = request.params;

    const processRosService = new ProcessRosService();

    await processRosService.execute({id});

    return response.status(200).send({message: 'ROS Tratado'})
  }

  async finishRos(request: Request, response: Response) {
    const { id } = request.params;

    const finishRosService = new FinishRosService();

    await finishRosService.execute({id});

    return response.status(200).send({message: 'ROS Finalizado'});
  }

  async goToExcel(_request: Request, response: Response) {
    const goToExcelRosService = new GoToExcelRosService();

    await goToExcelRosService.execute();

    return response.status(200).send();
  }
}