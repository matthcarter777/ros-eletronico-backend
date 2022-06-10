import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';

import ForgotPassword from '../repositories/ForgotPasswordRepository';
import UserRepository from '../repositories/UserRepository';

import UpdatePasswordService from './UpdatePasswordService';

class ForgotPasswordService {
  async execute(id: string, password: string) {
    
    const userRepository = getCustomRepository(UserRepository);
    const forgotPasswordRepository = getCustomRepository(ForgotPassword);
    const updatePasswordService = new UpdatePasswordService();

    const findForgotPasswordToken = await forgotPasswordRepository.findById(id);

    if(!findForgotPasswordToken) {
      throw new AppError('This token does not exist!');
    }

    const findUserByEmail = await userRepository.findById(findForgotPasswordToken.user_id);

    if(!findUserByEmail) {
      throw new AppError('User not already exist!');
    }

    await updatePasswordService.execute({id: findUserByEmail.id, password});
    
    await forgotPasswordRepository.remove(findForgotPasswordToken);

    return;
  }

}

export default ForgotPasswordService;