import { Router } from 'express';

import ResponsibleAreaController  from '../controllers/ResponsibleAreaController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';


const responsibleAreaController = new ResponsibleAreaController();

const router = Router();

router.get('/', responsibleAreaController.index);
router.post('/', ensureAuthenticated, isAdminUser, responsibleAreaController.create);
router.get('/:id', ensureAuthenticated, responsibleAreaController.show);
router.put('/:id', ensureAuthenticated, isAdminUser, responsibleAreaController.update);
router.delete('/:id', ensureAuthenticated, isAdminUser, responsibleAreaController.delete);

export default router;