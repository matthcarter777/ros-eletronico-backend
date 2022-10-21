import { Router } from 'express';

import ShiftController  from '../controllers/ShiftController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const shiftController = new ShiftController();

const router = Router();

router.get('/', shiftController.index);
router.post('/', ensureAuthenticated, shiftController.create);
router.get('/:id', ensureAuthenticated, shiftController.show);
router.put('/:id', ensureAuthenticated, shiftController.update);
router.delete('/:id', ensureAuthenticated, shiftController.delete);

export default router;