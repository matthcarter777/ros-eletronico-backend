import { getCustomRepository } from 'typeorm';

import CommentRepository from '../../repositories/CommentRepository';
import UserRepository from '@modules/users/repositories/UserRepository';
import RosRepository from '@modules/ros/repositories/RosRepository';
import { AppError } from '@shared/errors/AppError';

interface CommentRequest {
  ros_id: string;
  user_id: string;
  description: string;
}

class CreateRosService {
  async execute({ 
    ros_id,
    user_id,
    description,
  }: CommentRequest) {
    const commentRepository = getCustomRepository(CommentRepository);
    const userRepository = getCustomRepository(UserRepository);
    const rosRepository = getCustomRepository(RosRepository);

    const rosAlreadyExists = await rosRepository.findById(ros_id);

    if(!rosAlreadyExists) {
      throw new AppError("ROS não existente.");
    }
    
    const user = await userRepository.findById(user_id);
    
    if(!user) {
      throw new AppError("Usuario não existente.");
    }

    const comment = commentRepository.create({
      user_id: user.id,      
      ros_id: ros_id,
      description: description,
      author: user.name,
      created_at: new Date(),
    });
    
    console.log(comment);

    await commentRepository.save(comment); 

    return comment;
  }
}

export default CreateRosService;
