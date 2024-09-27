import { ApiProperty } from '@nestjs/swagger';
import { PartnerContactType } from '../enums/partner_contact_type.enum';

export class CreatePartnerContactDto {
  @ApiProperty()
  contactType: PartnerContactType;

  @ApiProperty()
  email: string;

  @ApiProperty()
  webhook: string;

  @ApiProperty()
  webhookApiKey: string;

  @ApiProperty()
  webHookApiSecret: string;
}