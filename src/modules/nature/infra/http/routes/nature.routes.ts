import { Router } from 'express';

import NatureController  from '../controllers/NatureController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const natureController = new NatureController();

const router = Router();

router.get('/', natureController.index);
router.post('/', ensureAuthenticated, natureController.create);
router.get('/:id', ensureAuthenticated, natureController.show);
router.put('/:id', ensureAuthenticated, natureController.update);
router.delete('/:id', ensureAuthenticated, natureController.delete);

export default router;