import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import ResponsibleAreaRepository from '../repositories/ResponsibleAreaRepository';

interface ResponsibleAreaRequest {
  name: string;
}

class CreateResponsibleAreaService {
  async execute({ name }: ResponsibleAreaRequest) {

    const responsibleAreaRepository = getCustomRepository(ResponsibleAreaRepository);

    const findResponsibleAreaByName = await responsibleAreaRepository.findByName(name);

    if(findResponsibleAreaByName) {
      throw new AppError('Reasponsible area already exist!');
    }

    const responsibleArea = responsibleAreaRepository.create({ name });

    await responsibleAreaRepository.save(responsibleArea);

    return responsibleArea;
  }

}

export default CreateResponsibleAreaService;
