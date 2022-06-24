import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ShiftRepository from '../repositories/ShiftRepository';

class DeleteShiftService {
  async execute(id: string) {
    const shiftRepository = getCustomRepository(ShiftRepository);

    const shift = await shiftRepository.findById(id)

    if(!shift) {
      throw new AppError('shift not found');
    }

    await shiftRepository.remove(shift);
  }
}

export default DeleteShiftService;
