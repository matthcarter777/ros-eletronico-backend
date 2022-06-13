import { Request, Response } from 'express';

import CreateLocalService from '@modules/local/services/CreateLocalService';
import IndexLocalService from '@modules/local/services/IndexLocalService';
import ShowLocalService from '@modules/local/services/ShowLocalService';
import UpdateLocalService from '@modules/local/services/UpdateLocalService';
import DeleteLocalService from '@modules/local/services/DeleteLocalService';

export default class AdminController {

  async index(_request: Request, response: Response) {
    const indexLocalService = new IndexLocalService();

    const locals = await indexLocalService.execute()

    return response.status(201).json(locals);
  }

  async create(request: Request, response: Response) {
    const { name } = request.body;

    const createLocalService = new CreateLocalService()

    const local = await createLocalService.execute({name})

    return response.status(201).json(local);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const localService = new ShowLocalService()

    const local = await localService.execute(id)

    return response.status(201).json(local);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const localService = new UpdateLocalService()

    const local = await localService.execute({ id, name })

    return response.status(201).json(local);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const localService = new DeleteLocalService()

    await localService.execute(id)

    return response.status(201).json({message: 'local delted'});
  }
}