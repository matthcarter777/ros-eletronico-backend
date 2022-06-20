import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import CompanyRepository from '../repositories/CompanyRepository';

class DeleteCompanyService {
  async execute(id: string) {
    const companyRepository = getCustomRepository(CompanyRepository);

    const company = await companyRepository.findById(id)

    if(!company) {
      throw new AppError('company not found');
    }

    await companyRepository.remove(company);
  }
}

export default DeleteCompanyService;
