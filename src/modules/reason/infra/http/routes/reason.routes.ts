import { Router } from 'express';

import ReasonController  from '../controllers/ReasonController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const reasonController = new ReasonController();

const router = Router();

router.get('/', reasonController.index);
router.get('/nature/:id', reasonController.showByNatureId);
router.post('/', ensureAuthenticated, reasonController.create);
router.get('/:id', ensureAuthenticated, reasonController.show);
router.put('/:id', ensureAuthenticated, reasonController.update);
router.delete('/:id', ensureAuthenticated, reasonController.delete);

export default router;