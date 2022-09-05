import { getCustomRepository } from 'typeorm';

import RosRepository from '../../repositories/RosRepository';

interface CreateROS  {
  observer_id?: string;
  date: Date;
  local_id: string;
  zone_id: string;
  company_area: string;
  nature_id: string;
  reason_id: string;
  description: string;
  suggestion: string;
  isAvail_responsible: boolean;
  company_id: string;
  manager_id: string;
  shift_id: string;
  responsible_id: string;
  status: string;
  negotiations: string;
  estimated_date_finish: Date;
  responsible_area_id: string;
}

class IndexRosService {
  async execute({
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
  }: CreateROS) {

    const rosRepository = getCustomRepository(RosRepository);

    const ros  = rosRepository.create({
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
    });

    await rosRepository.save(ros);
  }
}

export default IndexRosService;
