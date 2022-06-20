import { Request, Response } from 'express';

import CreateManagerService from '@modules/manager/services/CreateManagerService';
import IndexManagerService from '@modules/manager/services/IndexManagerService';
import ShowManagerService from '@modules/manager/services/ShowManagerService';
import UpdateManagerService from '@modules/manager/services/UpdateManagerService';
import DeleteManagerService from '@modules/manager/services/DeleteManagerService';

export default class ManagerController {

  async index(_request: Request, response: Response) {
    const indexManagerService = new IndexManagerService();

    const manager = await indexManagerService.execute()

    return response.status(201).json(manager);
  }

  async create(request: Request, response: Response) {
    const { name } = request.body;

    const createManagerService = new CreateManagerService()

    const manager = await createManagerService.execute({name})

    return response.status(201).json(manager);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const showManagerService = new ShowManagerService()

    const manager = await showManagerService.execute(id)

    return response.status(201).json(manager);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const updateManagerService = new UpdateManagerService();

    const manager = await updateManagerService.execute({ id, name });

    return response.status(201).json(manager);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteManagerService = new DeleteManagerService();

    await deleteManagerService.execute(id)

    return response.status(201).json({message: 'Manager delted'});
  }
}