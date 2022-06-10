import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';

import RolesRepository from '../repositories/RolesRepository';

class RoleShowService {
  async execute(id: string) {

    const roleRepository = getCustomRepository(RolesRepository);

    const role = await roleRepository.findById(id);

    if(!role) {
      throw new AppError('Role not already exist!');
    };

    return role;
  }

}

export default RoleShowService;
