import { Router } from 'express';

import RosResponsibleController  from '../controllers/RosResponsibleController';

const rosResponsibleController = new RosResponsibleController();

const router = Router();

router.get('/:id', rosResponsibleController.index);

export default router;