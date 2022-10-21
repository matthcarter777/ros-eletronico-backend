import { Router } from 'express';

import ManagerController  from '../controllers/ManagerController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const managerController = new ManagerController();

const router = Router();

router.get('/', managerController.index);
router.post('/', ensureAuthenticated, managerController.create);
router.get('/:id', ensureAuthenticated, managerController.show);
router.put('/:id', ensureAuthenticated, managerController.update);
router.delete('/:id', ensureAuthenticated, managerController.delete);

export default router;