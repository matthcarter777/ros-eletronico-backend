import { Router } from 'express';

import AdminRosController  from '../controllers/AdminRosController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';

const adminRosController = new AdminRosController();

const router = Router();

router.get('/',  ensureAuthenticated, adminRosController.index);
router.post('/', ensureAuthenticated, isAdminUser, adminRosController.create);
router.get('/:id', ensureAuthenticated, adminRosController.show);
router.put('/:id', ensureAuthenticated, isAdminUser, adminRosController.update);
router.put('/process/:id', ensureAuthenticated, isAdminUser, adminRosController.processRos);
router.put('/finish/:id', ensureAuthenticated, isAdminUser, adminRosController.finishRos);
router.get('/get/gotoexcel', ensureAuthenticated, isAdminUser, adminRosController.goToExcel);

export default router;