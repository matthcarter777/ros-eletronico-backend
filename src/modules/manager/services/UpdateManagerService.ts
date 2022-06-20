import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ManagerRepository from '../repositories/ManagerRepository';

interface ManagerRequest {
  id: string;
  name: string;
}

class UpdateManagerService {
  async execute({ id, name }: ManagerRequest) {
    const managerRepository = getCustomRepository(ManagerRepository);

    const manager = await managerRepository.findById(id);

    if(!manager) {
      throw new AppError('Manager not found');
    }

    manager.name = name;

    await managerRepository.save(manager);

    return manager;
  }
}

export default UpdateManagerService;