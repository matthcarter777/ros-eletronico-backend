import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import RolesRepository from '../repositories/RolesRepository';

interface RoleRequest {
  id: string;
  name?: string;
}

class RoleUpdateService {
  async execute({ id, name }: RoleRequest) {

    const roleRepository = getCustomRepository(RolesRepository);

    const role = await roleRepository.findById(id);

    if(!role) {
      throw new AppError('Role not already exist!');
    }

    role.name = name;

    await roleRepository.save(role);

    return role;
  }

}

export default RoleUpdateService;