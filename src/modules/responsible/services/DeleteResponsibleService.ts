import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ResponsibleRepository from '../repositories/ResponsibleRepository';

class DeleteResponsibleService {
  async execute(id: string) {
    const responsibleRepository = getCustomRepository(ResponsibleRepository);

    const responsible = await responsibleRepository.findById(id)

    if(!responsible) {
      throw new AppError('Responsible not found');
    }

    await responsibleRepository.remove(responsible);
  }
}

export default DeleteResponsibleService;