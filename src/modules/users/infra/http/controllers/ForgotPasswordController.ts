import { Request, Response } from 'express';

import CreateForgotPasswordService from '@modules/users/services/CreateForgotPasswordService';
import UpdateForgotpasswordService from '@modules/users/services/UpdateForgotpasswordService';

export default class ForgotPasswordController {

  async create(request: Request, response: Response) {
    const { email } = request.body;

    const forgotPasswordService = new CreateForgotPasswordService();

    await forgotPasswordService.execute(email); 

    return response.status(201).json({});
  }

  async update(request: Request, response: Response) {
    const { id, password } = request.body;

    const updateForgotpasswordService = new UpdateForgotpasswordService();

    await updateForgotpasswordService.execute(id, password); 

    return response.status(201).json({});
  }

}
