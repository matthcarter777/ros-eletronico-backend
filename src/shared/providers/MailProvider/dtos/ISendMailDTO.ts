import IParseMailTemplateDTO from "@shared/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO";

export default interface ISendMailDTO {
  to: string;
  subject: string;
  templateData: IParseMailTemplateDTO;
}