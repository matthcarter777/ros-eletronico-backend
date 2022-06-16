import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ReasonRepository from '../repositories/ReasonRepository';

class DeleteReasonService {
  async execute(id: string) {
    const reasonRepository = getCustomRepository(ReasonRepository);

    const reason = await reasonRepository.findById(id)

    if(!reason) {
      throw new AppError('Reason not found');
    }

    await reasonRepository.remove(reason);
  }
}

export default DeleteReasonService;