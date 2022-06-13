import { getCustomRepository } from 'typeorm';

import LocalRepository from '../repositories/LocalRepository';

class IndexLocalService {
  async execute() {
    const localRepository = getCustomRepository(LocalRepository);

    return localRepository.findAll();
  }
}

export default IndexLocalService;
