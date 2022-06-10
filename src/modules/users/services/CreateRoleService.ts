import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';

import RolesRepository from '../repositories/RolesRepository';


class UserRoleService {
  async execute(name: string) {

    const roleRepository = getCustomRepository(RolesRepository);

    const findRoleByName = await roleRepository.findByName(name);

    if(findRoleByName) {
      throw new AppError('Role already exist!');
    }

    const role = roleRepository.create({
      name,
    })

    await roleRepository.save(role)

    return role;
  }

}

export default UserRoleService;