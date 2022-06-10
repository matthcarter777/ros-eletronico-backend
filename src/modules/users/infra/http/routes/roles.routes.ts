import { Router } from 'express';

import RoleController from '../controllers/RoleController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';

const roleController = new RoleController();

const router = Router();

router.use(ensureAuthenticated, isAdminUser);

router.post('/', roleController.create);
router.get('/', roleController.index);
router.get('/:id', roleController.show);
router.put('/:id', roleController.update);
router.delete('/:id', roleController.delete);

export default router;
