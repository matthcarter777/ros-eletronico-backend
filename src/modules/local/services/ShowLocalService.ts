import { getCustomRepository } from 'typeorm';

import LocalRepository from '../repositories/LocalRepository';

class ShowLocalService {
  async execute(id: string) {
    const localRepository = getCustomRepository(LocalRepository);

    return localRepository.findById(id);
  }
}

export default ShowLocalService;