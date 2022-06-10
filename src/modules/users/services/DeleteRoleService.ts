import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';

import RolesRepository from '../repositories/RolesRepository';

class RoleDeleteService {
  async execute(id: string) {

    const roleRepository = getCustomRepository(RolesRepository);

    const role = await roleRepository.findById(id);

    if(!role) {
      throw new AppError('role not already exist!');
    };

    await roleRepository.remove(role);

    return role;
  }

}

export default RoleDeleteService;