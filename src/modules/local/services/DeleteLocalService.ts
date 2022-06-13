import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import LocalRepository from '../repositories/LocalRepository';

class DeleteLocalService {
  async execute(id: string) {
    const localRepository = getCustomRepository(LocalRepository);

    const local = await localRepository.findById(id)

    if(!local) {
      throw new AppError('Local not found');
    }

    await localRepository.remove(local);
  }
}

export default DeleteLocalService;