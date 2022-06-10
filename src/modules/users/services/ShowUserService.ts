import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';

import UserRepository from '../repositories/UserRepository';

class UserShowService {
  async execute(id: string) {

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findById(id);

    if(!user) {
      throw new AppError('User not already exist!');
    };

    return user;
  }

}

export default UserShowService;
