import nodemailer, { Transporter } from 'nodemailer';
import IMailProvider from "../models/IMailProvider";
import ISendMailDTO from '../dtos/ISendMailDTO';

import HandlebarsMailTemplateProvider from '@shared/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';

export default class OfficeMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    private mailTemplateProvider = new HandlebarsMailTemplateProvider 
  ) {
    const transporter = nodemailer.createTransport({
      service: "Outlook365",
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      tls: {
        ciphers:'SSLv3',
        rejectUnauthorized: false 
      }, 
      auth: {
        user: process.env.MAIL_USERNAME, 
        pass: process.env.MAIL_PASSWORD, 
      },
    });

    this.client = transporter;
  }


  public async sendMail({ to, subject, templateData }: ISendMailDTO): Promise<void> {
    const message = await this.client.sendMail({
      from: 'Help-Desk Itafos" <brasilhelpdesk@itafos.com>',
      to,
      subject, 
      html: await this.mailTemplateProvider.parse(templateData), 
    })
  }
  
}