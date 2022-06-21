import { Router } from 'express';

import ObserverController  from '../controllers/ObserverController';

const observerController = new ObserverController();

const router = Router();

router.get('/', observerController.index);
router.post('/', observerController.create);
router.get('/:id', observerController.show);
router.put('/:id', observerController.update);
router.delete('/:id', observerController.delete);

export default router;