import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import ZoneRepository from '../repositories/ZoneRepository';

interface ZoneRequest {
  name: string;
}

class CreateZoneService {
  async execute({ name }: ZoneRequest) {

    const zoneRepository = getCustomRepository(ZoneRepository);

    const findZoneByName = await zoneRepository.findByName(name);

    if(findZoneByName) {
      throw new AppError('Zone already exist!');
    }

    const zone = zoneRepository.create({ name });

    await zoneRepository.save(zone);

    return zone;
  }

}

export default CreateZoneService;
