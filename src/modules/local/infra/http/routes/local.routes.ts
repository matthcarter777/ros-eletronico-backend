import { Router } from 'express';

import LocalController  from '../controllers/LocalController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const localController = new LocalController();

const router = Router();

router.get('/', localController.index);
router.post('/', ensureAuthenticated, localController.create);
router.get('/:id', ensureAuthenticated, localController.show);
router.put('/:id', ensureAuthenticated, localController.update);
router.delete('/:id', ensureAuthenticated, localController.delete);

export default router;