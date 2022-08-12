import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';

import RosRepository from '../repositories/RosRepository';

interface UserRequest {
  name?: string;
  date: Date;
  local: string;
  zone: string;
  nature: string;
  reason: string;
  companyArea: string;
  description: string;
  suggestion: string;
  isAvail: string;
}

class CreateRosService {
  async execute({ 
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
  }: UserRequest) {
    console.log(date);

    const rosRepository = getCustomRepository(RosRepository);

    const ros = rosRepository.create({
      date: new Date(date),
      observer_id: name,
      local_id: local,
      zone_id: zone,
      nature_id: nature,
      reason_id: reason,
      company_area: companyArea,
      description,
      suggestion,
      isAvail_responsible: Boolean(isAvail),
      status: 'não resolvido',
      negotiations: 'não tratado',
      created_at: new Date(),
    });

    await rosRepository.save(ros);

    return ros;
  }

}

export default CreateRosService;
