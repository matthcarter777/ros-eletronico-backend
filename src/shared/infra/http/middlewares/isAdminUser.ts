import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import UserRepository from '../../../../modules/users/repositories/UserRepository';
import RolesRepository from '../../../../modules/users/repositories/RolesRepository';


export default async function isAdminUser(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {

  const id = request.user;

  try {

    const userRepository = getCustomRepository(UserRepository);
    const rolesRepository = getCustomRepository(RolesRepository);

    const user = await userRepository.findById(id.id);

    if(!user) {
      throw new AppError('User not already exist!');
    };

    const role = await rolesRepository.findById(user.roles_id);

    if(role.name === 'admin') {
      return next();
    } else {
      throw new AppError('This route not permitted on this user', 401);
    }

  } catch (error) {
    throw new AppError('This route not permitted on this user', 401);
  }
}
