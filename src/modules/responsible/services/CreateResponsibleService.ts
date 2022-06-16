import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import ResponsibleRepository from '../repositories/ResponsibleRepository';

interface ResponsibleRequest {
  name: string;
  email: string;
}

class CreateResponsibleService {
  async execute({ name, email }: ResponsibleRequest) {

    const responsibleRepository = getCustomRepository(ResponsibleRepository);

    const findResponsibleByName = await responsibleRepository.findByName(name);

    if(findResponsibleByName) {
      throw new AppError('responsile already exist!');
    }

    const responsible = responsibleRepository.create({ name, email });

    await responsibleRepository.save(responsible);

    return responsible;
  }

}

export default CreateResponsibleService;
