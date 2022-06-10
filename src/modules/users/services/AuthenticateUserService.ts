import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import { AppError } from '@shared/errors/AppError';
import authConfig from '@config/auth';
import { User } from '../infra/typeorm/entities/User';
import UserRepository from '../repositories/UserRepository';
import RolesRepository from '../repositories/RolesRepository';
import BCryptHashProvider from '@shared/providers/BCryptProvider/implementations/BCryptHashProvider';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
  roles: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: IRequest ): Promise<IResponse> {
    const userRepository = getCustomRepository(UserRepository);
    const hasProvider = new BCryptHashProvider();
    const rolesRepository = new RolesRepository();

    let roles = null;
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const role_id = user.roles_id;

    const findRole = await rolesRepository.findById(role_id);

    if(findRole) {
      roles = findRole.name;
    }

    const passwordMatched = await hasProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })

    return {
      user,
      roles,
      token
    }
  }

}

export default AuthenticateUserService;
