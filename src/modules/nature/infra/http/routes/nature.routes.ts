import { Router } from 'express';

import NatureController  from '../controllers/NatureController';

const natureController = new NatureController();

const router = Router();

router.get('/', natureController.index);
router.post('/', natureController.create);
router.get('/:id', natureController.show);
router.put('/:id', natureController.update);
router.delete('/:id', natureController.delete);

export default router;