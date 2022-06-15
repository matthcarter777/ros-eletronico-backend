import { Request, Response } from 'express';

import CreateNatureService from '@modules/nature/services/CreateNatureService';
import IndexNatureService from '@modules/nature/services/IndexNatureService';
import ShowNatureService from '@modules/nature/services/ShowNatureService';
import UpdateNatureService from '@modules/nature/services/UpdateNatureService';
import DeleteNatureService from '@modules/nature/services/DeleteNatureService';

export default class NatureController {

  async index(_request: Request, response: Response) {
    const natureService = new IndexNatureService();

    const nature = await natureService.execute()

    return response.status(201).json(nature);
  }

  async create(request: Request, response: Response) {
    const { name } = request.body;

    const natureService = new CreateNatureService()

    const nature = await natureService.execute({name})

    return response.status(201).json(nature);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const natureService = new ShowNatureService()

    const nature = await natureService.execute(id)

    return response.status(201).json(nature);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const natureService = new UpdateNatureService()

    const nature = await natureService.execute({ id, name })

    return response.status(201).json(nature);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const natureService = new DeleteNatureService()

    await natureService.execute(id)

    return response.status(201).json({message: 'zone delted'});
  }
}