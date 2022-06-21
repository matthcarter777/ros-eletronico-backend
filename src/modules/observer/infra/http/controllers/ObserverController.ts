import { Request, Response } from 'express';

import CreateObserverService from '@modules/observer/services/CreateObserverService';
import IndexObserverService from '@modules/observer/services/IndexObserverService';
import ShowObserverService from '@modules/observer/services/ShowObserverService';
import UpdateObserverService from '@modules/observer/services/UpdateObserverService';
import DeleteObserverService from '@modules/observer/services/DeleteObserverService';

export default class ObserverController {

  async index(_request: Request, response: Response) {
    const indexObserverService = new IndexObserverService();

    const observer = await indexObserverService.execute();

    return response.status(201).json(observer);
  }

  async create(request: Request, response: Response) {
    const { name, company_id } = request.body;

    const createObserverService = new CreateObserverService();

    const observer = await createObserverService.execute({name, company_id});

    return response.status(201).json(observer);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const showObserverService = new ShowObserverService();

    const observer = await showObserverService.execute(id);

    return response.status(201).json(observer);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, company_id} = request.body;

    const updateObserverService = new UpdateObserverService();

    const observer = await updateObserverService.execute({ id, name, company_id });

    return response.status(201).json(observer);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteObserverService = new DeleteObserverService();

    await deleteObserverService.execute(id);

    return response.status(201).json({message: 'observer delted'});
  }
}