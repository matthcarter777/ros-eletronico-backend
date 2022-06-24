import { Router } from 'express';

import ShiftController  from '../controllers/ShiftController';

const shiftController = new ShiftController();

const router = Router();

router.get('/', shiftController.index);
router.post('/', shiftController.create);
router.get('/:id', shiftController.show);
router.put('/:id', shiftController.update);
router.delete('/:id', shiftController.delete);

export default router;