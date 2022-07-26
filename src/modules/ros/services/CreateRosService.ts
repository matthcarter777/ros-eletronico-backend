import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';

import RosRepository from '../repositories/RosRepository';

interface UserRequest {
  name?: string;
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
    local, 
    zone, 
    nature,
    reason,
    companyArea,
    description,
    suggestion,
    isAvail
  }: UserRequest) {

    console.log({
      name, 
      local, 
      zone, 
      nature,
      reason,
      companyArea,
      description,
      suggestion,
      isAvail
    })

    const rosRepository = getCustomRepository(RosRepository);

    const ros = rosRepository.create({
      
    })

    return;
  }

}

export default CreateRosService;
