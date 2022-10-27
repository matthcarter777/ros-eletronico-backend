import { Router } from 'express';

import ZoneController  from '../controllers/ZoneController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';

const zoneController = new ZoneController();

const router = Router();

router.get('/', zoneController.index);
router.post('/', ensureAuthenticated, isAdminUser, zoneController.create);
router.get('/:id', ensureAuthenticated, zoneController.show);
router.put('/:id', ensureAuthenticated, isAdminUser, zoneController.update);
router.delete('/:id', ensureAuthenticated, isAdminUser, zoneController.delete);

export default router;