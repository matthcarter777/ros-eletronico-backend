import { Router } from 'express';

import AdminRosController  from '../controllers/AdminRosController';

const adminRosController = new AdminRosController();

const router = Router();

router.get('/', adminRosController.index);

export default router;