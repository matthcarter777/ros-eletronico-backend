import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import ShiftRepository from '../repositories/ShiftRepository';

interface ShiftRequest {
  id: string;
  name: string;
}

class UpdateShiftService {
  async execute({ id, name }: ShiftRequest) {
    const shiftRepository = getCustomRepository(ShiftRepository);

    const shift = await shiftRepository.findById(id);

    if(!shift) {
      throw new AppError('Local not found');
    }

    shift.name = name;

    await shiftRepository.save(shift);

    return shift;
  }
}

export default UpdateShiftService;