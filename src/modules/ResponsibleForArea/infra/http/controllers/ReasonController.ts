import { Request, Response } from 'express';

import CreateReasonService from '@modules/reason/services/CreateReasonService';
import IndexReasonService from '@modules/reason/services/IndexReasonService';
import ShowReasonService from '@modules/reason/services/ShowReasonService';
import UpdateReasonService from '@modules/reason/services/UpdateReasonService';
import DeleteReasonService from '@modules/reason/services/DeleteReasonService';
import ShowReasonByNatureId from '@modules/reason/services/ShowReasonByNatureId';

export default class ReasonController {

  async index(_request: Request, response: Response) {
    const reasonService = new IndexReasonService();

    const reason = await reasonService.execute();

    return response.status(201).json(reason);
  }

  async showByNatureId(request: Request, response: Response) {
    const { id } = request.params;

    const reasonService = new ShowReasonByNatureId();

    const reason = await reasonService.execute(id);

    return response.status(201).json(reason);
  }

  async create(request: Request, response: Response) {
    const { name, nature_id } = request.body;

    const reasonService = new CreateReasonService();

    const reason = await reasonService.execute({name, nature_id});

    return response.status(201).json(reason);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const reasonService = new ShowReasonService();

    const reason = await reasonService.execute(id);

    return response.status(201).json(reason);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, nature_id} = request.body;

    const reasonService = new UpdateReasonService();

    const reason = await reasonService.execute({ id, name, nature_id });

    return response.status(201).json(reason);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const reasonService = new DeleteReasonService();

    await reasonService.execute(id);

    return response.status(201).json({message: 'reason delted'});
  }
}