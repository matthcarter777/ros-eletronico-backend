import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import LocalRepository from '../repositories/LocalRepository';

interface LocalRequest {
  id: string;
  name: string;
}

class UpdateLocalService {
  async execute({ id, name }: LocalRequest) {
    const localRepository = getCustomRepository(LocalRepository);

    const local = await localRepository.findById(id);

    if(!local) {
      throw new AppError('Local not found');
    }

    local.name = name;

    await localRepository.save(local);

    return local;
  }
}

export default UpdateLocalService;