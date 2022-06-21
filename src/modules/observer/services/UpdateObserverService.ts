import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ObserverRepository from '../repositories/ObserverRepository';

interface ObserverRequest {
  id: string;
  name?: string;
  company_id?: string;
}

class UpdateObserverService {
  async execute({ id, name, company_id }: ObserverRequest) {
    const observerRepository = getCustomRepository(ObserverRepository);

    const observer = await observerRepository.findById(id);

    if(!observer) {
      throw new AppError('observer not found');
    }

    observer.name = name;
    observer.company_id = company_id;

    await observerRepository.save(observer);

    return observer;
  }
}

export default UpdateObserverService;