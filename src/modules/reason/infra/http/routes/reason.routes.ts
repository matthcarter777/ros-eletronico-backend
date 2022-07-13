import { Router } from 'express';

import ReasonController  from '../controllers/ReasonController';

const reasonController = new ReasonController();

const router = Router();

router.get('/', reasonController.index);
router.get('/nature/:id', reasonController.showByNatureId);
router.post('/', reasonController.create);
router.get('/:id', reasonController.show);
router.put('/:id', reasonController.update);
router.delete('/:id', reasonController.delete);

export default router;