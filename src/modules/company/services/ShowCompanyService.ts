import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import CompanyRepository from '../repositories/CompanyRepository';

class ShowCompanyService {
  async execute(id: string) {
    const companyRepository = getCustomRepository(CompanyRepository);

    const findCompanyById = await companyRepository.findById(id)

    if(!findCompanyById) {
      throw new AppError('Company not already exist!');
    }

    return findCompanyById;
  }
}

export default ShowCompanyService;
