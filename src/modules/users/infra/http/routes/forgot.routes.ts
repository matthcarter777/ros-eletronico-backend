import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';

const forgotPasswordController = new ForgotPasswordController();

const router = Router();

router.post('/', forgotPasswordController.create);
router.patch('/', forgotPasswordController.update);

export default router;
