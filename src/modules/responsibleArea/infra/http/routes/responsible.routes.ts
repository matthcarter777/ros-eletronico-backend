import { Router } from 'express';

import ResponsibleAreaController  from '../controllers/ResponsibleAreaController';

const responsibleAreaController = new ResponsibleAreaController();

const router = Router();

router.get('/', responsibleAreaController.index);
router.post('/', responsibleAreaController.create);
router.get('/:id', responsibleAreaController.show);
router.put('/:id', responsibleAreaController.update);
router.delete('/:id', responsibleAreaController.delete);

export default router;