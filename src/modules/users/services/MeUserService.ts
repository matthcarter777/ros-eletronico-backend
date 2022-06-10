import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';

import UserRepository from '../repositories/UserRepository';
import RolesRepository from '../repositories/RolesRepository';

class UserMeService {
  async execute(id: string) {

    const userRepository = getCustomRepository(UserRepository);
    const rolesRepository = getCustomRepository(RolesRepository);

    const user = await userRepository.findById(id);

    if(!user) {
      throw new AppError('User not already exist!');
    };

    const role = await rolesRepository.findById(user.roles_id);

    delete user.password;

    return { user, roles: role.name };
  }

}

export default UserMeService;
