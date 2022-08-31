import { getCustomRepository } from 'typeorm';

import RosRepository from '../../repositories/RosRepository';

interface ROSProps  {
  id: string;
  company_id?: string;
  manager_id?: string;
  responsible_id?: string;
  responsible_area_id?: string;
  shift_id?: string;
  estimated_date_finish?: Date;
}

class UpdateRosService {
  async execute({
    id,
    company_id,
    manager_id,
    responsible_id,
    estimated_date_finish,
    responsible_area_id,
    shift_id
  }: ROSProps) {

    const rosRepository = getCustomRepository(RosRepository);

    const ros = await rosRepository.findById(id);

    ros.company_id = company_id;
    ros.manager_id = manager_id;
    ros.responsible_id = responsible_id;
    ros.estimated_date_finish = estimated_date_finish;
    ros.responsible_area_id = responsible_area_id;
    ros.shift_id = shift_id;

    await rosRepository.save(ros);
  } 
}

export default UpdateRosService;
