import { Router } from 'express';

import AdminRosController  from '../controllers/AdminRosController';

const adminRosController = new AdminRosController();

const router = Router();

router.get('/', adminRosController.index);
router.post('/', adminRosController.create);
router.get('/:id', adminRosController.show);

export default router;