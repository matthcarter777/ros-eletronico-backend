import { getCustomRepository } from 'typeorm';

import ObserverRepository from '../repositories/ObserverRepository';
import CompanyRepository from '@modules/company/repositories/CompanyRepository';

class IndexObserverService {
  async execute() {
    const observerRepository = getCustomRepository(ObserverRepository);
    const companyRepository = getCustomRepository(CompanyRepository);

    const observers = await observerRepository.findAll();
    const companies = await companyRepository.findAll();

    const observerWithCompany = observers.map(observer => {
      return { 
        id: observer.id,
        name: observer.name,
        company_id: observer.company_id,
        company_name: companies.find(company => company.id === observer.company_id).name
      }
    })

    return observerWithCompany;
  }
}

export default IndexObserverService;
