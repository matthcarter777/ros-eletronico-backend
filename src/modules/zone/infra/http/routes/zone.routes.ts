import { Router } from 'express';

import ZoneController  from '../controllers/ZoneController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const zoneController = new ZoneController();

const router = Router();

router.get('/', zoneController.index);
router.post('/', ensureAuthenticated, zoneController.create);
router.get('/:id', ensureAuthenticated, zoneController.show);
router.put('/:id', ensureAuthenticated, zoneController.update);
router.delete('/:id', ensureAuthenticated, zoneController.delete);

export default router;