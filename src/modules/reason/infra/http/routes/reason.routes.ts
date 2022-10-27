import { Router } from 'express';

import ReasonController  from '../controllers/ReasonController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';

const reasonController = new ReasonController();

const router = Router();

router.get('/', reasonController.index);
router.get('/nature/:id', reasonController.showByNatureId);
router.post('/', ensureAuthenticated, isAdminUser, reasonController.create);
router.get('/:id', ensureAuthenticated, reasonController.show);
router.put('/:id',  ensureAuthenticated, isAdminUser, reasonController.update);
router.delete('/:id', ensureAuthenticated, isAdminUser, reasonController.delete);

export default router;