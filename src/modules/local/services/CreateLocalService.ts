import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import LocalRepository from '../repositories/LocalRepository';

interface LocalRequest {
  name: string;
}

class CreateLocalService {
  async execute({ name }: LocalRequest) {

    const localRepository = getCustomRepository(LocalRepository);

    const findLocalByName = await localRepository.findByName(name);

    if(findLocalByName) {
      throw new AppError('Local already exist!');
    }

    const local = localRepository.create({ name });

    await localRepository.save(local);

    return local;
  }

}

export default CreateLocalService;
