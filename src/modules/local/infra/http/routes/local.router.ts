import { Router } from 'express';

import LocalController  from '../controllers/LocalController';

const localController = new LocalController();

const router = Router();

router.get('/', localController.index);
router.post('/', localController.create);
router.get('/:id', localController.show);
router.put('/:id', localController.update);
router.delete('/:id', localController.delete);

export default router;