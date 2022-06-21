import { getCustomRepository } from 'typeorm';

import ObserverRepository from '../repositories/ObserverRepository';

class IndexObserverService {
  async execute() {
    const observerRepository = getCustomRepository(ObserverRepository);

    return observerRepository.findAll();
  }
}

export default IndexObserverService;
