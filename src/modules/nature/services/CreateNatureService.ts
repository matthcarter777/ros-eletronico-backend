import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import NatureRepository from '../repositories/NatureRepository';

interface NatureRequest {
  name: string;
}

class CreateNatureService {
  async execute({ name }: NatureRequest) {

    const natureRepository = getCustomRepository(NatureRepository);

    const findNatureByName = await natureRepository.findByName(name);

    if(findNatureByName) {
      throw new AppError('Zone already exist!');
    }

    const nature = natureRepository.create({ name });

    await natureRepository.save(nature);

    return nature;
  }

}

export default CreateNatureService;
