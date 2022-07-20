import { Router } from 'express';

import RosController  from '../controllers/RosController';

const rosController = new RosController();

const router = Router();

router.post('/', rosController.create);

export default router;