import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import ManagerRepository from '../repositories/ManagerRepository';

interface ManagerRequest {
  name: string;
}

class CreateManagerService {
  async execute({ name }: ManagerRequest) {

    const managerRepository = getCustomRepository(ManagerRepository);

    const findManagerByName = await managerRepository.findByName(name);

    if(findManagerByName) {
      throw new AppError('Manager already exist!');
    }

    const manager = managerRepository.create({ name });

    await managerRepository.save(manager);

    return manager;
  }

}

export default CreateManagerService;
