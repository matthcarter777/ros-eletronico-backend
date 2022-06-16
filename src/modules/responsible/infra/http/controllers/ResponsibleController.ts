import { Request, Response } from 'express';

import CreateResponsibleService from '@modules/responsible/services/CreateResponsibleService';
import IndexResponsibleService from '@modules/responsible/services/IndexResponsibleService';
import ShowResponsibleService from '@modules/responsible/services/ShowResponsibleService';
import UpdateResponsibleService from '@modules/responsible/services/UpdateResponsibleService';
import DeleteResponsibleService from '@modules/responsible/services/DeleteResponsibleService';

export default class ResponsibleController {

  async index(_request: Request, response: Response) {
    const responsibleService = new IndexResponsibleService();

    const responsible = await responsibleService.execute();

    return response.status(201).json(responsible);
  }

  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const responsibleService = new CreateResponsibleService();

    const responsible = await responsibleService.execute({name, email});

    return response.status(201).json(responsible);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const responsibleService = new ShowResponsibleService();

    const responsible = await responsibleService.execute(id);

    return response.status(201).json(responsible);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email} = request.body;

    const responsibleService = new UpdateResponsibleService();

    const responsible = await responsibleService.execute({ id, name, email });

    return response.status(201).json(responsible);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const responsibleService = new DeleteResponsibleService();

    await responsibleService.execute(id);

    return response.status(201).json({message: 'responsible deleted'});
  }
}