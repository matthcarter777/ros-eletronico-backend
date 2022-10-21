import { Router } from 'express';

import CommentsController  from '../controllers/CommentsController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const commentsController = new CommentsController();

const router = Router();

router.get('/:id', ensureAuthenticated, commentsController.index);
router.post('/:id', ensureAuthenticated, commentsController.create);

export default router;