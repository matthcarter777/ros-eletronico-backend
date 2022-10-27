import { Router } from 'express';

import ShiftController  from '../controllers/ShiftController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';

const shiftController = new ShiftController();

const router = Router();

router.get('/', shiftController.index);
router.post('/', ensureAuthenticated, isAdminUser, shiftController.create);
router.get('/:id', ensureAuthenticated, shiftController.show);
router.put('/:id', ensureAuthenticated, isAdminUser, shiftController.update);
router.delete('/:id', ensureAuthenticated, isAdminUser, shiftController.delete);

export default router;