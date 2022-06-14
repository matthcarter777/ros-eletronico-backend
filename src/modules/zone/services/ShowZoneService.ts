import { getCustomRepository } from 'typeorm';

import ZoneRepository from '../repositories/ZoneRepository';

class ShowZoneService {
  async execute(id: string) {
    const zoneRepository = getCustomRepository(ZoneRepository);

    return zoneRepository.findById(id);
  }
}

export default ShowZoneService;