import { CreateUserProps } from '../../user/interfaces/create-user-props';
import { PartnerContactType } from '../enums/partner_contact_type.enum';
import { CreatePartnerContactProps } from './create-partner-contact.props';

export interface CreatePartnerProps extends CreateUserProps{
  name: string,
  contactType: PartnerContactType,
  contact?: CreatePartnerContactProps,
}