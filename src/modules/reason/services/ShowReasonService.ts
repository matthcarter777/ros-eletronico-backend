import { getCustomRepository } from 'typeorm';

import ReasonRepository from '../repositories/ReasonRepository';

class ShowReasonService {
  async execute(id: string) {
    const reasonRepository = getCustomRepository(ReasonRepository);

    return reasonRepository.findById(id);
  }
}

export default ShowReasonService;