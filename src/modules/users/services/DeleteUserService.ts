import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';

import UserRepository from '../repositories/UserRepository';

class UserDeleteService {
  async execute(id: string) {

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findById(id);

    if(!user) {
      throw new AppError('User not already exist!');
    };

    await userRepository.remove(user);

    return user;
  }

}

export default UserDeleteService;