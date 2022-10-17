import { Router, Response, Request } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import userSessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import rolesSessionsRouter from '@modules/users/infra/http/routes/roles.routes';
import forgotRouter from '@modules/users/infra/http/routes/forgot.routes';
import localRouter from "@modules/local/infra/http/routes/local.routes";
import zoneRouter from "@modules/zone/infra/http/routes/zone.routes";
import natureRouter from "@modules/nature/infra/http/routes/nature.routes";
import reasonRouter from "@modules/reason/infra/http/routes/reason.routes";
import managerRouter from "@modules/manager/infra/http/routes/manager.routes";
import companyRouter from "@modules/company/infra/http/routes/company.routes";
import observerRouter from "@modules/observer/infra/http/routes/observer.routes";
import responsibleAreaRouter from "@modules/responsibleArea/infra/http/routes/responsible.routes";
import shiftRouter from "@modules/shift/infra/http/routes/shift.routes";
import rosRouter from "@modules/ros/infra/http/routes/ros.router";
import adminRosRouter from "@modules/ros/infra/http/routes/admin-ros.router";
import rosResponsibleRouter from "@modules/ros/infra/http/routes/ros-responsible.router";
import commentsRouter from "@modules/ros/infra/http/routes/comments.router";

export const router = Router();

/* User */
router.use('/users', usersRouter);
router.use('/login', userSessionsRouter);
router.use('/forgotpassword', forgotRouter);

/* Admin */

router.use('/admin/roles', rolesSessionsRouter);
router.use('/admin/local', localRouter);
router.use('/admin/zone', zoneRouter);
router.use('/admin/nature', natureRouter);
router.use('/admin/reason', reasonRouter);
router.use('/admin/manager', managerRouter);
router.use('/admin/company', companyRouter);
router.use('/admin/observer', observerRouter);
router.use('/admin/responsible-area', responsibleAreaRouter);
router.use('/admin/shift', shiftRouter);
router.use('/admin/ros', adminRosRouter);

/* Responsible */
router.use('/ros/responsible', rosResponsibleRouter);


/* Public */

router.use('/ros', rosRouter);
router.use('/comments/ros', commentsRouter);

/* Bas API */
router.get('/api', (_request: Request, response: Response) => {
  response.status(200).json('Itafos ROS API');
});
