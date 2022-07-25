import { Request, Response } from 'express';

export default class RosController {

  async create(request: Request, response: Response) {
    const {       
      name,
      local,
      zone,
      nature,
      reason,
      companyArea,
      description,
      suggestion,
      isAvail 
    } = request.body;

      console.log({
        name,
        local,
        zone,
        nature,
        reason,
        companyArea,
        description,
        suggestion,
        isAvail 
      })

    return response.status(201).json({ok: true});
  }
}