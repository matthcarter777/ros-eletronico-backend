import { getCustomRepository } from 'typeorm';

import ReasonRepository from '../repositories/ReasonRepository';

class IndexReasonService {
  async execute() {
    const reasonRepository = getCustomRepository(ReasonRepository);

    return reasonRepository.findAll();
  }
}

export default IndexReasonService;
