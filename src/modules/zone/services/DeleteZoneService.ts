import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ZoneRepository from '../repositories/ZoneRepository';

class DeleteZoneService {
  async execute(id: string) {
    const zoneRepository = getCustomRepository(ZoneRepository);

    const zone = await zoneRepository.findById(id)

    if(!zone) {
      throw new AppError('Local not found');
    }

    await zoneRepository.remove(zone);
  }
}

export default DeleteZoneService;