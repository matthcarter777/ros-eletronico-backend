import { getCustomRepository } from 'typeorm';
import path from 'path';

import UserRepository from '../../modules/users/repositories/UserRepository';
import RolesRepository from '../../modules/users/repositories/RolesRepository';
import OfficeMailProvider from '@shared/providers/MailProvider/implementations/OfficeMailProvider';


export async function notificationAdminsByEmail(ros: string) {
  const userRepository = getCustomRepository(UserRepository);
  const rolesRepository = getCustomRepository(RolesRepository);
  const sendMailProvider = new OfficeMailProvider();
  const appLink = process.env.APP_URL;

  const users = await userRepository.find();
  const role = await rolesRepository.find();

  const adminRole = role.find(role => role.name === 'admin');
  const usersAdmins = users
    .filter(user => user.roles_id === adminRole.id)
    .map(user => user.email);


  const createRosTemplate = path.resolve(__dirname, '..', '..' , 'modules', 'ros', 'views', 'new_ros.hbs');

    await sendMailProvider.sendMail({
    to: usersAdmins.toString(),
    subject: `Novo chamado ROS foi criado.`,
    templateData: {
      file: createRosTemplate,
      variables: {
        id: ros,
        name: 'Administradores',
        link: `${appLink}/admin/ros-admin/edit/${ros}`
      }
    }
  })

  return;
}
