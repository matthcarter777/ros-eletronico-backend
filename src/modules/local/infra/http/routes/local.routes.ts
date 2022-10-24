import { Router } from 'express';

import LocalController  from '../controllers/LocalController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';

const localController = new LocalController();

const router = Router();

router.get('/', localController.index);
router.post('/', ensureAuthenticated, isAdminUser, localController.create);
router.get('/:id', ensureAuthenticated, localController.show);
router.put('/:id', ensureAuthenticated, isAdminUser, localController.update);
router.delete('/:id', ensureAuthenticated, isAdminUser, localController.delete);

export default router;