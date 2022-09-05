import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import RosRepository from '../../repositories/RosRepository';

interface ROSProps  {
  id: string;
}

class ProcessRosService {
  async execute({
    id
  }: ROSProps) {

    const rosRepository = getCustomRepository(RosRepository);

    const ros = await rosRepository.findById(id);

    if (!ros.responsible_id) {
      throw new AppError("O ROS precisa ser atendido antes desta alteração")
    }

    console.log(ros);
  } 
}

export default ProcessRosService;
