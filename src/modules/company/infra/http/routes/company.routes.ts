import { Router } from 'express';

import CompanyController  from '../controllers/CompanyController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const companyController = new CompanyController();

const router = Router();

router.get('/', companyController.index);
router.post('/', ensureAuthenticated, companyController.create);
router.get('/:id', ensureAuthenticated, companyController.show);
router.put('/:id', ensureAuthenticated, companyController.update);
router.delete('/:id', ensureAuthenticated, companyController.delete);

export default router;