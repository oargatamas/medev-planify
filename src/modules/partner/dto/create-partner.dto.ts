import { PartnerContactType } from '../enums/partner_contact_type.enum';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { TourServiceType } from '../../../shared/enums/tour-service-type.enum';
import { CreateUserDto } from '../../user/dto/create-user.dto';

export class CreatePartnerDto extends PartialType(CreateUserDto){
  @ApiProperty()
  name: string;

  @ApiProperty()
  contactType: PartnerContactType;

  @ApiProperty()
  serviceTypes: TourServiceType[];
}
