import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ResponsibleAreaRepository from '../repositories/ResponsibleAreaRepository';

interface ResponsibleAreaRequest {
  id: string;
  name: string;
}

class UpdateResponsibleAreaService {
  async execute({ id, name }: ResponsibleAreaRequest) {
    const responsibleAreaRepository = getCustomRepository(ResponsibleAreaRepository);

    const responsibleArea = await responsibleAreaRepository.findById(id);

    if(!responsibleArea) {
      throw new AppError('responsible area not found');
    }

    responsibleArea.name = name;

    await responsibleAreaRepository.save(responsibleArea);

    return responsibleArea;
  }
}

export default UpdateResponsibleAreaService;