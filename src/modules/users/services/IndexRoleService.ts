import { getCustomRepository } from 'typeorm';

import RolesRepository from '../repositories/RolesRepository';

class RoleIndexService {
  async execute() {

    const roleRepository = getCustomRepository(RolesRepository);

    const roles = roleRepository.find();

    return roles;
  }

}

export default RoleIndexService;