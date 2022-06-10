import { Request, Response } from 'express';

import IndexRoleService from '@modules/users/services/IndexRoleService';
import CreateRoleService from '@modules/users/services/CreateRoleService';
import ShowRoleService from '@modules/users/services/ShowRoleService';
import UpdateRoleService from '@modules/users/services/UpdateRoleService';
import DeleteRoleService from '@modules/users/services/DeleteRoleService';


export default class RolesController {

  async index(_request: Request, response: Response) {
    const roleService = new IndexRoleService();

    const role = await roleService.execute()

    return response.status(201).json(role);
  }

  async create(request: Request, response: Response) {
    const { name } = request.body;

    const roleService = new CreateRoleService();

    const role = await roleService.execute(name); 

    return response.status(201).json(role);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const roleService = new ShowRoleService();

    const role = await roleService.execute(id);

    return response.status(201).json(role);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { 
      name
    } = request.body;

    const roleService = new UpdateRoleService();

    const role = await roleService.execute({ 
      id,
      name
     });

    return response.status(201).json(role);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const roleService = new DeleteRoleService();

    await roleService.execute(id);

    return response.status(201).json({
      message: 'Role deleted!'
    });
  }
}