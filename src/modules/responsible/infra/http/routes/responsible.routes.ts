import { Router } from 'express';

import ResponsibleController  from '../controllers/ResponsibleController';

const responsibleController = new ResponsibleController();

const router = Router();

router.get('/', responsibleController.index);
router.post('/', responsibleController.create);
router.get('/:id', responsibleController.show);
router.put('/:id', responsibleController.update);
router.delete('/:id', responsibleController.delete);

export default router;