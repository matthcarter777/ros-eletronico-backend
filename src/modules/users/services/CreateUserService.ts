import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';

import UserRepository from '../repositories/UserRepository';
import HashProvider from '@shared/providers/BCryptProvider/implementations/BCryptHashProvider';

interface UserRequest {
  name: string;
  email: string;
  password?: string;
  roles_id?: string;
}

class UserCreateService {
  async execute({ name, email, password, roles_id }: UserRequest) {

    const userRepository = getCustomRepository(UserRepository);
    const hashProvider = new HashProvider();

    const findUserByEmail = await userRepository.findByEmail(email);

    if(findUserByEmail) {
      throw new AppError('User already exist!');
    }

    const hashedPassword = await hashProvider.generateHash(password);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      roles_id
    })

    await userRepository.save(user)

    return user;
  }

}

export default UserCreateService;
