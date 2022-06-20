import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import CompanyRepository from '../repositories/CompanyRepository';

interface CompanyRequest {
  name: string;
}

class CreateCompanyService {
  async execute({ name }: CompanyRequest) {

    const companyRepository = getCustomRepository(CompanyRepository);

    const findCompanyByName = await companyRepository.findByName(name);

    if(findCompanyByName) {
      throw new AppError('Manager already exist!');
    }

    const company = companyRepository.create({ name });

    await companyRepository.save(company);

    return company;
  }

}

export default CreateCompanyService;
