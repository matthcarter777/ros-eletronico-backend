import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ManagerRepository from '../repositories/ManagerRepository';

class DeleteManagerService {
  async execute(id: string) {
    const managerRepository = getCustomRepository(ManagerRepository);

    const manager = await managerRepository.findById(id)

    if(!manager) {
      throw new AppError('Manager not found');
    }

    await managerRepository.remove(manager);
  }
}

export default DeleteManagerService;
