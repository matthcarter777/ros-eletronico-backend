import { getCustomRepository, SimpleConsoleLogger } from 'typeorm';
import path from 'path';

import { AppError } from '@shared/errors/AppError';

import OfficeMailProvider from '@shared/providers/MailProvider/implementations/OfficeMailProvider';
import ForgotPassword from '../repositories/ForgotPasswordRepository';
import UserRepository from '../repositories/UserRepository';


class ForgotPasswordService {
  async execute(email: string) {
    
    const userRepository = getCustomRepository(UserRepository);
    const sendMailProvider = new OfficeMailProvider();
    const appLink = process.env.APP_URL;

    const findUserByEmail = await userRepository.findByEmail(email);

    if(!findUserByEmail) {
      throw new AppError('User not already exist!');
    }
    
    const forgotPasswordRepository = getCustomRepository(ForgotPassword);

    const findOldRequestForgotpassword = await forgotPasswordRepository.findByUserId(findUserByEmail.id);

    if(findOldRequestForgotpassword) {
      const forgot_passwordTemplate = path.resolve(__dirname, '..', 'views', 'forgot_password.hbs');

      await sendMailProvider.sendMail({
        to: `${findUserByEmail.email}`,
        subject: `Recuperação de senha`,
        templateData: {
          file: forgot_passwordTemplate,
          variables: {
            name: findUserByEmail.email,
            link: `${appLink}/resetpassword/${findOldRequestForgotpassword.id}`
          }
        }
      });

      return;
    }

    const forgotPasswordRequest = forgotPasswordRepository.create({
      user_id: findUserByEmail.id
    });

    await forgotPasswordRepository.save(forgotPasswordRequest); 

    const forgot_passwordTemplate = path.resolve(__dirname, '..', 'views', 'forgot_password.hbs');

    await sendMailProvider.sendMail({
      to: `${findUserByEmail.email}`,
      subject: `Recuperação de senha`,
      templateData: {
        file: forgot_passwordTemplate,
        variables: {
          name: findUserByEmail.email,
          link: `${appLink}/resetpassword/${forgotPasswordRequest.id}`
        }
      }
    });

  }

}

export default ForgotPasswordService;