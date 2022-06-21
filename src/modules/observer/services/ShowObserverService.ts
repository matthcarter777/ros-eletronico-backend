import { getCustomRepository } from 'typeorm';

import ObserverRepository from '../repositories/ObserverRepository';

class ShowObserverService {
  async execute(id: string) {
    const observerRepository = getCustomRepository(ObserverRepository);

    return observerRepository.findById(id);
  }
}

export default ShowObserverService;
