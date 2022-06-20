import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ManagerRepository from '../repositories/ManagerRepository';

class ShowManagerService {
  async execute(id: string) {
    const managerRepository = getCustomRepository(ManagerRepository);

    const managerFindById = await managerRepository.findById(id)

    if(!managerFindById) {
      throw new AppError('Manager not already exist!');
    }

    return managerFindById;
  }
}

export default ShowManagerService;