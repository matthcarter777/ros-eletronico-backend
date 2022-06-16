import { getCustomRepository } from 'typeorm';

import ResponsibleRepository from '../repositories/ResponsibleRepository';

class ShowResponsibleService {
  async execute(id: string) {
    const responsibleRepository = getCustomRepository(ResponsibleRepository);

    return responsibleRepository.findById(id);
  }
}

export default ShowResponsibleService;