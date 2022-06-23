import { Request, Response } from 'express';

import IndexResponsibleAreaService from '@modules/responsibleArea/services/IndexResponsibleAreaService';
import CreateResponsibleAreaService from '@modules/responsibleArea/services/CreateResponsibleAreaService';
import ShowResponsibleAreaService from '@modules/responsibleArea/services/ShowResponsibleAreaService';
import UpdateResponsibleAreaService from '@modules/responsibleArea/services/UpdateResponsibleAreaService';
import DeleteResponsibleAreaService from '@modules/responsibleArea/services/DeleteResponsibleAreaService';

export default class ResponsibleAreaController {

  async index(_request: Request, response: Response) {
    const indexResponsibleAreaService = new IndexResponsibleAreaService();

    const responsibleArea = await indexResponsibleAreaService.execute();

    return response.status(201).json(responsibleArea);
  }

  async create(request: Request, response: Response) {
    const { name } = request.body;

    const createResponsibleAreaService = new CreateResponsibleAreaService();

    const responsibleArea = await createResponsibleAreaService.execute({name});

    return response.status(201).json(responsibleArea);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const showResponsibleAreaService = new ShowResponsibleAreaService();

    const responsibleArea = await showResponsibleAreaService.execute(id);

    return response.status(201).json(responsibleArea);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const updateResponsibleAreaService = new UpdateResponsibleAreaService();

    const responsibleArea = await updateResponsibleAreaService.execute({ id, name });

    return response.status(201).json(responsibleArea);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteResponsibleAreaService = new DeleteResponsibleAreaService();

    await deleteResponsibleAreaService.execute(id);

    return response.status(201).json({message: 'responsible area deleted'});
  }
}