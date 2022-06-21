import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ObserverRepository from '../repositories/ObserverRepository';

class DeleteObserverService {
  async execute(id: string) {
    const observerRepository = getCustomRepository(ObserverRepository);

    const observer = await observerRepository.findById(id);

    if(!observer) {
      throw new AppError('Observer not found');
    }

    await observerRepository.remove(observer);
  }
}

export default DeleteObserverService;