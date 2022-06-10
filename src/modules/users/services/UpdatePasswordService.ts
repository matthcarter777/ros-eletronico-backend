import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import UserRepository from '../repositories/UserRepository';
import HashProvider from '@shared/providers/BCryptProvider/implementations/BCryptHashProvider';

interface UserRequest {
  id: string;
  password: string;
}

class ResetPasswordService {
  async execute({ id, password }: UserRequest) {
    const userRepository = getCustomRepository(UserRepository);
    const hashProvider = new HashProvider();

    const user = await userRepository.findById(id);

    if(!user) {
      throw new AppError('User not already exist!');
    }

    const hashedPassword = await hashProvider.generateHash(password);

    user.password = hashedPassword;

    await userRepository.save(user);

    return;
  }

}

export default ResetPasswordService;