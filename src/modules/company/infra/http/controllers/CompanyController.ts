import { Request, Response } from 'express';

import CreateCompanyService from '@modules/company/services/CreateCompanyService';
import IndexCompanyService from '@modules/company/services/IndexCompanyService';
import ShowCompanyService from '@modules/company/services/ShowCompanyService';
import UpdateCompanyService from '@modules/company/services/UpdateCompanyService';
import DeleteCompanyService from '@modules/company/services/DeleteCompanyService';

export default class CompanyController {

  async index(_request: Request, response: Response) {
    const indexCompanyService = new IndexCompanyService();

    const company = await indexCompanyService.execute();

    return response.status(201).json(company);
  }

  async create(request: Request, response: Response) {
    const { name } = request.body;

    const createCompanyService = new CreateCompanyService()

    const company = await createCompanyService.execute({name})

    return response.status(201).json(company);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const showCompanyService = new ShowCompanyService()

    const company = await showCompanyService.execute(id)

    return response.status(201).json(company);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const updateCompanyService = new UpdateCompanyService();

    const company = await updateCompanyService.execute({ id, name });

    return response.status(201).json(company);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCompanyService = new DeleteCompanyService();

    await deleteCompanyService.execute(id)

    return response.status(201).json({message: 'Company delted'});
  }
}