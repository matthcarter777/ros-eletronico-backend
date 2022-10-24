import { Router } from 'express';

import NatureController  from '../controllers/NatureController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';

const natureController = new NatureController();

const router = Router();

router.get('/', natureController.index);
router.post('/', ensureAuthenticated, isAdminUser, natureController.create);
router.get('/:id', ensureAuthenticated, natureController.show);
router.put('/:id', ensureAuthenticated, isAdminUser, natureController.update);
router.delete('/:id', ensureAuthenticated, isAdminUser, natureController.delete);

export default router;