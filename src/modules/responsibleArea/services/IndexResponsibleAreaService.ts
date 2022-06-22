import { getCustomRepository } from 'typeorm';

import ResponsibleAreaRepository from '../repositories/ResponsibleAreaRepository';

class IndexResponsibleAreaService {
  async execute() {
    const responsibleAreaRepository = getCustomRepository(ResponsibleAreaRepository);

    return responsibleAreaRepository.findAll();
  }
}

export default IndexResponsibleAreaService;
