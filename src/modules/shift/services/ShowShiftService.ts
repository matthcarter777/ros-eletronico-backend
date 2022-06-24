import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ShiftRepository from '../repositories/ShiftRepository';

class ShowZoneService {
  async execute(id: string) {
    const shiftRepository = getCustomRepository(ShiftRepository);
    
    const shift = await shiftRepository.findById(id);

    if (!shift) {
      throw new AppError('Shift not found');
    }

    return shift
  }
}

export default ShowZoneService;