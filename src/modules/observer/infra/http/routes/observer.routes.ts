import { Router } from 'express';

import ObserverController  from '../controllers/ObserverController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const observerController = new ObserverController();

const router = Router();

router.get('/', observerController.index);
router.post('/', ensureAuthenticated, observerController.create);
router.get('/:id', ensureAuthenticated, observerController.show);
router.put('/:id', ensureAuthenticated, observerController.update);
router.delete('/:id', ensureAuthenticated, observerController.delete);

export default router;