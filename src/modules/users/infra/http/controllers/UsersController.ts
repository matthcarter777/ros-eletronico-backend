import { Request, Response } from 'express';

import CreateUserService from '@modules/users/services/CreateUserService';
import IndexUserService from '@modules/users/services/IndexUserService';
import ShowUserService from 'modules/users/services/ShowUserService';
import UpdateUserService from 'modules/users/services/UpdateUserService';
import DeleteUserService from 'modules/users/services/DeleteUserService';
import MeUserService from 'modules/users/services/MeUserService';
import UpdatePasswordService from '@modules/users/services/UpdatePasswordService';

import CreateRoleService from 'modules/users/services/CreateRoleService';

export default class UserController {

  async index(_request: Request, response: Response) {
    const userService = new IndexUserService();

    const user = await userService.execute()

    return response.status(201).json(user);
  }

  async create(request: Request, response: Response) {
    const { name, email, password, roles_id } = request.body;

    const userService = new CreateUserService();

    const user = await userService.execute({
      name,
      email,
      password,
      roles_id
    }) 

    return response.status(201).json(user);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const userService = new ShowUserService();

    const user = await userService.execute(id);

    return response.status(201).json(user);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { 
      name,
      email,
      password,
      roles_id
    } = request.body;

    const userService = new UpdateUserService();

    const user = await userService.execute({ 
      id,
      name,
      email,
      password,
      roles_id
     });

    return response.status(201).json(user);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const userService = new DeleteUserService();

    await userService.execute(id);

    return response.status(201).json({
      message: 'User deleted!'
    });
  }

  async reset(request: Request, response: Response) {
    const { id, password } = request.body;

    console.log(id, password);

    const userService = new UpdatePasswordService();

    await userService.execute({ 
      id,
      password
     });

    return response.status(201).json({
      message: 'Password updated'
    });
  }

  async me(request: Request, response: Response) {
    const id = request.user;

    const userService = new MeUserService();

    const user = await userService.execute(id.id);

    return response.status(201).json({ user });
  }

  async config(_request: Request, response: Response) {

    const userService = new CreateUserService();
    const createRole = new CreateRoleService();

    const role = await createRole.execute('admin');

    const userAdmin = {
      name: 'Admin' ,
      email: 'admin@admin.com',
      password: 'm!0l0553',
      roles_id: role.id,
    };

    await userService.execute(userAdmin);

    return response.status(201).json({
      message: 'User Admin created!'
    });
  }
}