import { getCustomRepository } from 'typeorm';

import ResponsibleRepository from '../repositories/ResponsibleRepository';

class IndexResponsibleService {
  async execute() {
    const responsibleRepository = getCustomRepository(ResponsibleRepository);

    return responsibleRepository.findAll();
  }
}

export default IndexResponsibleService;
