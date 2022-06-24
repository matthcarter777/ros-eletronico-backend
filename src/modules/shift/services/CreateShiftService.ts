import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import ShiftRepository from '../repositories/ShiftRepository';

interface ShiftRequest {
  name: string;
}

class CreateShiftService {
  async execute({ name }: ShiftRequest) {

    const shiftRepository = getCustomRepository(ShiftRepository);

    const findShiftByName = await shiftRepository.findByName(name);

    if(findShiftByName) {
      throw new AppError('Shift already exist!');
    }

    const shift = shiftRepository.create({ name });

    await shiftRepository.save(shift);

    return shift;
  }

}

export default CreateShiftService;
