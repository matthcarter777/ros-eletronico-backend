import { Router } from 'express';

import CommentsController  from '../controllers/CommentsController';

const commentsController = new CommentsController();

const router = Router();

router.get('/:id', commentsController.index);
router.post('/:id', commentsController.create);

export default router;