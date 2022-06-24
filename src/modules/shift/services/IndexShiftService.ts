import { getCustomRepository } from 'typeorm';

import ShiftRepository from '../repositories/ShiftRepository';

class IndexShiftService {
  async execute() {
    const shiftRepository = getCustomRepository(ShiftRepository);

    return shiftRepository.findAll();
  }
}

export default IndexShiftService;
