import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import BCryptHashProvider from '@shared/providers/BCryptProvider/implementations/BCryptHashProvider';

import UserRepository from '../repositories/UserRepository';

interface UserRequest {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  roles_id?: string;
  department_id?: string;
}

class UserUpdateService {
  async execute({ id, name, email, password, roles_id, department_id }: UserRequest) {

    const userRepository = getCustomRepository(UserRepository);
    const hashProvider = new BCryptHashProvider();

    const user = await userRepository.findById(id);

    if(!user) {
      throw new AppError('User not already exist!');
    }

    const hashedPassword = await hashProvider.generateHash(password);

    user.name = name;
    user.email = email;
    user.password = hashedPassword;
    user.roles_id = roles_id;

    await userRepository.save(user);

    return user;
  }

}

export default UserUpdateService;