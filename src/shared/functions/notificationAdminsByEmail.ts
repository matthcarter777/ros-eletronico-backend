import { getCustomRepository } from 'typeorm';
import path from 'path';

import UserRepository from '../../modules/users/repositories/UserRepository';
import RolesRepository from '../../modules/users/repositories/RolesRepository';
import OfficeMailProvider from '@shared/providers/MailProvider/implementations/OfficeMailProvider';

interface TicketRequest {
  id: string;
  title: string;
  description: string;
  priority: string;
  user_id: string;
  category_id: string;
  department_id: string;
  responsible_id?: string;
}


export async function notificationAdminsByEmail(ticket: TicketRequest) {
  const userRepository = getCustomRepository(UserRepository);
  const rolesRepository = getCustomRepository(RolesRepository);
  const sendMailProvider = new OfficeMailProvider();
  const appLink = process.env.APP_URL;

  const users = await userRepository.find();
  const role = await rolesRepository.find();

  const adminRole = role.find(role => role.name === 'admin');
  const usersAdmins = users.filter(user => user.roles_id === adminRole.id);

  const usersEmail = usersAdmins.map(user => {
    return user.email;
  });


  const createTicketTemplate = path.resolve(__dirname, '..', '..' , 'modules', 'tickets', 'views', 'create_ticket.hbs');

    await sendMailProvider.sendMail({
    to: usersEmail.toString(),
    subject: `Novo chamado ${ticket.id} criado com sucesso`,
    templateData: {
      file: createTicketTemplate,
      variables: {
        id: ticket.id,
        name: 'Administradores',
        description: ticket.description,
        link: `${appLink}/tickets/${ticket.id}`
      }
    }
  })

  return;
}
