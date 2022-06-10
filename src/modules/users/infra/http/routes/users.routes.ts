import { Router } from 'express';

import UserController from '../controllers/UsersController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';

const userController = new UserController();

const router = Router();

router.post('/',ensureAuthenticated, isAdminUser, userController.create);
router.get('/', ensureAuthenticated, userController.index);
router.get('/:id',ensureAuthenticated, isAdminUser, userController.show);
router.put('/:id',ensureAuthenticated, isAdminUser ,userController.update);
router.delete('/:id',ensureAuthenticated, isAdminUser, userController.delete);
router.get('/user/me', ensureAuthenticated, userController.me);
router.put('/user/reset', ensureAuthenticated, userController.reset);
router.post('/config', userController.config); 

export default router;