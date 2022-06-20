import { Router } from 'express';

import CompanyController  from '../controllers/CompanyController';

const companyController = new CompanyController();

const router = Router();

router.get('/', companyController.index);
router.post('/', companyController.create);
router.get('/:id', companyController.show);
router.put('/:id', companyController.update);
router.delete('/:id', companyController.delete);

export default router;