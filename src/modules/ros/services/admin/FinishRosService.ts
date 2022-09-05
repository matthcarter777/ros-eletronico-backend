import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import RosRepository from '../../repositories/RosRepository';

interface ROSProps  {
  id: string;
}

class FinishRosService {
  async execute({
    id
  }: ROSProps) {

    const rosRepository = getCustomRepository(RosRepository);

    const ros = await rosRepository.findById(id);

    if (!ros.responsible_id) {
      throw new AppError("O ROS precisa ser atendido antes desta alteração");
    }

    if (ros.negotiations !== 'Tratado') {
      throw new AppError("O ROS precisa ser tratado antes da finalização");
    }

    ros.status = "Resolvido";
    ros.finish_at = new Date();

    await rosRepository.save(ros);
  } 
}

export default FinishRosService;
