import { Router } from 'express';

import ObserverController  from '../controllers/ObserverController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';

const observerController = new ObserverController();

const router = Router();

router.get('/', observerController.index);
router.post('/', ensureAuthenticated, isAdminUser, observerController.create);
router.get('/:id', ensureAuthenticated, observerController.show);
router.put('/:id', ensureAuthenticated, isAdminUser, observerController.update);
router.delete('/:id', ensureAuthenticated, isAdminUser, observerController.delete);

export default router;