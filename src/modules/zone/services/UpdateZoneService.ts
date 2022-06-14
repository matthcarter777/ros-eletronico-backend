import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ZoneRepository from '../repositories/ZoneRepository';

interface ZoneRequest {
  id: string;
  name: string;
}

class UpdateZoneService {
  async execute({ id, name }: ZoneRequest) {
    const zoneRepository = getCustomRepository(ZoneRepository);

    const zone = await zoneRepository.findById(id);

    if(!zone) {
      throw new AppError('Local not found');
    }

    zone.name = name;

    await zoneRepository.save(zone);

    return zone;
  }
}

export default UpdateZoneService;