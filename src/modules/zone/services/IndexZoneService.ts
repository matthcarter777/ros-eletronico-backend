import { getCustomRepository } from 'typeorm';

import ZoneRepository from '../repositories/ZoneRepository';

class IndexZoneService {
  async execute() {
    const zoneRepository = getCustomRepository(ZoneRepository);

    return zoneRepository.findAll();
  }
}

export default IndexZoneService;
