import { Router } from 'express';

import RosResponsibleController  from '../controllers/RosResponsibleController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const rosResponsibleController = new RosResponsibleController();

const router = Router();

router.get('/', ensureAuthenticated, rosResponsibleController.index);

export default router;