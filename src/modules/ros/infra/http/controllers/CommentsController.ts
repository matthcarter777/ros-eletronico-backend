import { Request, Response } from 'express';

import CreateCommentService from '@modules/ros/services/Comment/CreateCommentService';

export default class CommentsController {

  async index(request: Request, response: Response) {
    const {  } = request.params;

/*     const indexRosService = new IndexRosService();
    
    const ros = await indexRosService.execute(id); */

    response.status(200).send({ok: true});
  }

  async create(request: Request, response: Response) {
    const { id } = request.params;
    const { description, user_id  } = request.body;

    const createCommentService = new CreateCommentService();
    
    const comment = await createCommentService.execute({
      description,
      ros_id: id,
      user_id
    });

    response.status(200).send(comment);
  }

}
