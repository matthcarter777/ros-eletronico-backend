import { Router } from 'express';

import ZoneController  from '../controllers/ZoneController';

const zoneController = new ZoneController();

const router = Router();

router.get('/', zoneController.index);
router.post('/', zoneController.create);
router.get('/:id', zoneController.show);
router.put('/:id', zoneController.update);
router.delete('/:id', zoneController.delete);

export default router;