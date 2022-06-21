import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import ObserverRepository from '../repositories/ObserverRepository';

interface ObserverRequest {
  company_id: string;
  name: string;
}

class CreateObserverService {
  async execute({ company_id, name }: ObserverRequest) {
    const observerRepository = getCustomRepository(ObserverRepository);

    const findObserverByName = await observerRepository.findByCompanyId(company_id);

    if(findObserverByName?.name === name && findObserverByName?.company_id === company_id) {
      throw new AppError('Observer already exist!');
    }

    const observer = observerRepository.create({ name, company_id });

    await observerRepository.save(observer);
    
    return observer;
  }

}

export default CreateObserverService;
