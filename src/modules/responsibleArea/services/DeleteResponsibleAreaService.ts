import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ResponsibleAreaRepository from '../repositories/ResponsibleAreaRepository';

class DeleteResponsibleAreaService {
  async execute(id: string) {
    const responsibleAreaRepository = getCustomRepository(ResponsibleAreaRepository);

    const responsibleArea = await responsibleAreaRepository.findById(id)

    if(!responsibleArea) {
      throw new AppError('responsible area not found');
    }

    await responsibleAreaRepository.remove(responsibleArea);
  }
}

export default DeleteResponsibleAreaService;