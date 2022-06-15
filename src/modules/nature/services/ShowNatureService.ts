import { getCustomRepository } from 'typeorm';

import NatureRepository from '../repositories/NatureRepository';

class ShowNatureService {
  async execute(id: string) {
    const natureRepository = getCustomRepository(NatureRepository);

    return natureRepository.findById(id);
  }
}

export default ShowNatureService;