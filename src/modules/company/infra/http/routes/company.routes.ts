import { Router } from 'express';

import CompanyController  from '../controllers/CompanyController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import isAdminUser from '@shared/infra/http/middlewares/isAdminUser';

const companyController = new CompanyController();

const router = Router();

router.get('/', companyController.index);
router.post('/', ensureAuthenticated, isAdminUser, companyController.create);
router.get('/:id', ensureAuthenticated, companyController.show);
router.put('/:id', ensureAuthenticated, isAdminUser, companyController.update);
router.delete('/:id', ensureAuthenticated, isAdminUser, companyController.delete);

export default router;