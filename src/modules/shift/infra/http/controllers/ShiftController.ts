import { Request, Response } from 'express';

import CreateShiftService from '@modules/shift/services/CreateShiftService';
import IndexShiftService from '@modules/shift/services/IndexShiftService';
import ShowShiftService from '@modules/shift/services/ShowShiftService';
import UpdateShiftService from '@modules/shift/services/UpdateShiftService';
import DeleteShiftService from '@modules/shift/services/DeleteShiftService';

export default class ShiftController {

  async index(_request: Request, response: Response) {
    const indexShiftService = new IndexShiftService();

    const shift = await indexShiftService.execute();

    return response.status(201).json(shift);
  }

  async create(request: Request, response: Response) {
    const { name } = request.body;

    const createShiftService = new CreateShiftService();

    const shift = await createShiftService.execute({name});

    return response.status(201).json(shift);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const showShiftService = new ShowShiftService();

    const shift = await showShiftService.execute(id);

    return response.status(201).json(shift);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const updateShiftService = new UpdateShiftService();

    const shift = await updateShiftService.execute({ id, name });

    return response.status(201).json(shift);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteShiftService = new DeleteShiftService();

    await deleteShiftService.execute(id);

    return response.status(201).json({message: 'shift delted'});
  }
}