import { Request, Response } from 'express';

import CreateZoneService from '@modules/zone/services/CreateZoneService';
import IndexZoneService from '@modules/zone/services/IndexZoneService';
import ShowZoneService from '@modules/zone/services/ShowZoneService';
import UpdateZoneService from '@modules/zone/services/UpdateZoneService';
import DeleteZoneService from '@modules/zone/services/DeleteZoneService';

export default class ZoneController {

  async index(_request: Request, response: Response) {
    const zoneService = new IndexZoneService();

    const zone = await zoneService.execute()

    return response.status(201).json(zone);
  }

  async create(request: Request, response: Response) {
    const { name } = request.body;

    const zoneService = new CreateZoneService()

    const zone = await zoneService.execute({name})

    return response.status(201).json(zone);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const zoneService = new ShowZoneService()

    const zone = await zoneService.execute(id)

    return response.status(201).json(zone);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const zoneService = new UpdateZoneService()

    const zone = await zoneService.execute({ id, name })

    return response.status(201).json(zone);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const zoneService = new DeleteZoneService()

    await zoneService.execute(id)

    return response.status(201).json({message: 'zone delted'});
  }
}