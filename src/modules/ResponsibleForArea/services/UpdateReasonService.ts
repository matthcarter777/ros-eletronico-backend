import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ReasonRepository from '../repositories/ReasonRepository';

interface ReasonRequest {
  id: string;
  name?: string;
  nature_id?: string;
}

class UpdateReasonService {
  async execute({ id, name, nature_id }: ReasonRequest) {
    const reasonRepository = getCustomRepository(ReasonRepository);

    const reason = await reasonRepository.findById(id);

    if(!reason) {
      throw new AppError('Reason not found');
    }

    reason.name = name;
    reason.nature_id = nature_id;

    await reasonRepository.save(reason);

    return reason;
  }
}

export default UpdateReasonService;