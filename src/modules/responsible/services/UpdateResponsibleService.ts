import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ResponsibleRepository from '../repositories/ResponsibleRepository';

interface ResponsibleRequest {
  id: string;
  name?: string;
  email?: string;
}

class UpdateResponsibleService {
  async execute({ id, name, email }: ResponsibleRequest) {
    const responsibleRepository = getCustomRepository(ResponsibleRepository);

    const local = await responsibleRepository.findById(id);

    if(!local) {
      throw new AppError('Responsible not found');
    }

    local.name = name;
    local.email = email;

    await responsibleRepository.save(local);

    return local;
  }
}

export default UpdateResponsibleService;
