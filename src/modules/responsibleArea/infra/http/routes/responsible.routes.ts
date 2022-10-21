import { Router } from 'express';

import ResponsibleAreaController  from '../controllers/ResponsibleAreaController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const responsibleAreaController = new ResponsibleAreaController();

const router = Router();

router.get('/', responsibleAreaController.index);
router.post('/', ensureAuthenticated, responsibleAreaController.create);
router.get('/:id', ensureAuthenticated, responsibleAreaController.show);
router.put('/:id', ensureAuthenticated, responsibleAreaController.update);
router.delete('/:id', ensureAuthenticated, responsibleAreaController.delete);

export default router;