import { getCustomRepository } from 'typeorm';

import ManagerRepository from '../repositories/ManagerRepository';

class IndexManagerService {
  async execute() {
    const managerRepository = getCustomRepository(ManagerRepository);

    return managerRepository.findAll();
  }
}

export default IndexManagerService;
