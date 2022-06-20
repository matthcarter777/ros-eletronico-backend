import { Router, Response, Request } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import userSessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import rolesSessionsRouter from '@modules/users/infra/http/routes/roles.routes';
import forgotRouter from '@modules/users/infra/http/routes/forgot.routes';
import localRouter from "@modules/local/infra/http/routes/local.router";
import zoneRouter from "@modules/zone/infra/http/routes/zone.routes";
import natureRouter from "@modules/nature/infra/http/routes/nature.routes";
import reasonRouter from "@modules/reason/infra/http/routes/reason.routes";
import responsibleRouter from "@modules/responsible/infra/http/routes/responsibel.routes";
import managerRouter from "@modules/manager/infra/http/routes/manager.routes";

export const router = Router();

/* User */
router.use('/users', usersRouter);
router.use('/login', userSessionsRouter);
router.use('/roles', rolesSessionsRouter);
router.use('/forgotpassword', forgotRouter);

/* Admin */

router.use('/admin/local', localRouter);
router.use('/admin/zone', zoneRouter);
router.use('/admin/nature', natureRouter);
router.use('/admin/reason', reasonRouter);
router.use('/admin/responsible', responsibleRouter);
router.use('/admin/manager', managerRouter);


/* Bas API */
router.get('/api', (_request: Request, response: Response) => {
  response.status(200).json('Itafos ROS API');
});
