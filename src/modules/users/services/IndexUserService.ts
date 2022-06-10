import { getCustomRepository } from 'typeorm';

import UserRepository from '../repositories/UserRepository';

class UserIndexService {
  async execute() {

    const userRepository = getCustomRepository(UserRepository);

    const user = userRepository.find();

    return user;
  }

}

export default UserIndexService;