import { getCustomRepository } from 'typeorm';

import RosRepository from '../../repositories/RosRepository';
import CommentRepository from '../../repositories/CommentRepository';
import { AppError } from '@shared/errors/AppError';


class IndexRosResponsibleService {
  async execute(id: string) {
    const rosRepository = getCustomRepository(RosRepository);
    const commentRepository = getCustomRepository(CommentRepository);

    const ros = await rosRepository.findById(id);

    if(!ros) {
      throw new AppError('ROS not already exist!');
    }

    const comments = await commentRepository.findByRosId(id);

    return comments;
  }

}

export default IndexRosResponsibleService;
