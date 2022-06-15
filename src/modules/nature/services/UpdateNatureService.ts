import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import NatureRepository from '../repositories/NatureRepository';

interface NatureRequest {
  id: string;
  name: string;
}

class UpdateNatureService {
  async execute({ id, name }: NatureRequest) {
    const natureRepository = getCustomRepository(NatureRepository);

    const nature = await natureRepository.findById(id);

    if(!nature) {
      throw new AppError('Local not found');
    }

    nature.name = name;

    await natureRepository.save(nature);

    return nature;
  }
}

export default UpdateNatureService;