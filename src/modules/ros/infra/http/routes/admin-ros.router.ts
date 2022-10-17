import { Router } from 'express';

import AdminRosController  from '../controllers/AdminRosController';

const adminRosController = new AdminRosController();

const router = Router();

router.get('/', adminRosController.index);
router.post('/', adminRosController.create);
router.get('/:id', adminRosController.show);
router.put('/:id', adminRosController.update);
router.put('/process/:id', adminRosController.processRos);
router.put('/finish/:id', adminRosController.finishRos);
router.get('/gotoexcel/:id', adminRosController.goToExcel);

export default router;