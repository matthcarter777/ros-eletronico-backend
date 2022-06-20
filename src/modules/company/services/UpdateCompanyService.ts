import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import CompanyRepository from '../repositories/CompanyRepository';

interface CompanyRequest {
  id: string;
  name: string;
}

class UpdateCompanyService {
  async execute({ id, name }: CompanyRequest) {
    const companyRepository = getCustomRepository(CompanyRepository);

    const company = await companyRepository.findById(id);

    if(!company) {
      throw new AppError('company not found');
    }

    company.name = name;

    await companyRepository.save(company);

    return company;
  }
}

export default UpdateCompanyService;