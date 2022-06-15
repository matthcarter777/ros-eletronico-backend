import { getCustomRepository } from 'typeorm';

import NatureRepository from '../repositories/NatureRepository';

class IndexNatureService {
  async execute() {
    const natureRepository = getCustomRepository(NatureRepository);

    return natureRepository.findAll();
  }
}

export default IndexNatureService;
