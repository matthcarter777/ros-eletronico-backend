import { Router } from 'express';

import ManagerController  from '../controllers/ManagerController';

const managerController = new ManagerController();

const router = Router();

router.get('/', managerController.index);
router.post('/', managerController.create);
router.get('/:id', managerController.show);
router.put('/:id', managerController.update);
router.delete('/:id', managerController.delete);

export default router;