import { Router } from 'express';

import AdminRosController  from '../controllers/AdminRosController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';

const adminRosController = new AdminRosController();

const router = Router();

router.get('/', isAdminUser, ensureAuthenticated, adminRosController.index);
router.post('/', isAdminUser, ensureAuthenticated, adminRosController.create);
router.get('/:id', isAdminUser, ensureAuthenticated, adminRosController.show);
router.put('/:id', isAdminUser, ensureAuthenticated, adminRosController.update);
router.put('/process/:id', isAdminUser, ensureAuthenticated, adminRosController.processRos);
router.put('/finish/:id', isAdminUser, ensureAuthenticated, adminRosController.finishRos);
router.get('/gotoexcel/:id', isAdminUser, ensureAuthenticated, adminRosController.goToExcel);

export default router;