import { getCustomRepository } from 'typeorm';

import CompanyRepository from '../repositories/CompanyRepository';

class IndexCompanyService {
  async execute() {
    const companyRepository = getCustomRepository(CompanyRepository);

    return companyRepository.findAll();
  }
}

export default IndexCompanyService;
