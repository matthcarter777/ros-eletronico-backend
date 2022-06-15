import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import NatureRepository from '../repositories/NatureRepository';

class DeleteNatureService {
  async execute(id: string) {
    const natureRepository = getCustomRepository(NatureRepository);

    const nature = await natureRepository.findById(id)

    if(!nature) {
      throw new AppError('Nature not found');
    }

    await natureRepository.remove(nature);
  }
}

export default DeleteNatureService;