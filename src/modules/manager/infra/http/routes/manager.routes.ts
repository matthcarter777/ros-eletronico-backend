import { Router } from 'express';

import ManagerController  from '../controllers/ManagerController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';

const managerController = new ManagerController();

const router = Router();

router.get('/', managerController.index);
router.post('/', ensureAuthenticated, isAdminUser, managerController.create);
router.get('/:id', ensureAuthenticated, managerController.show);
router.put('/:id', ensureAuthenticated, isAdminUser, managerController.update);
router.delete('/:id', ensureAuthenticated, isAdminUser, managerController.delete);

export default router;