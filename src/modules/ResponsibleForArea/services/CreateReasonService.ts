import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import ReasonRepository from '../repositories/ReasonRepository';

interface ReasonRequest {
  nature_id: string;
  name: string;
}

class CreateReasonService {
  async execute({ nature_id, name }: ReasonRequest) {
    console.log({name, nature_id})

    const reasonRepository = getCustomRepository(ReasonRepository);

    const findReasonByName = await reasonRepository.findByNatureId(nature_id);

    console.log(findReasonByName);
  
    if(findReasonByName?.name === name) {
      throw new AppError('Reason already exist!');
    }

    const reason = reasonRepository.create({ name, nature_id });

    await reasonRepository.save(reason);

    return reason;
  }

}

export default CreateReasonService;
