import { TourServiceType } from '../../../shared/enums/tour-service-type.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePartnerSubscriptionDto {
  @ApiProperty()
  serviceTypes: TourServiceType[];
}
