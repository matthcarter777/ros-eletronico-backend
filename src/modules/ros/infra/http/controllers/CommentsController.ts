import { Request, Response } from 'express';

import CreateCommentService from '@modules/ros/services/Comment/CreateCommentService';
import IndexCommentService from '@modules/ros/services/Comment/IndexCommentService';

export default class CommentsController {

  async index(request: Request, response: Response) {
    const { id } = request.params;

    const indexCommentService = new IndexCommentService();
    
    const comments = await indexCommentService.execute(id);

    response.status(200).send(comments);
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
