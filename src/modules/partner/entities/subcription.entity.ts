import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { TourServiceType } from '../../../shared/enums/tour_service_type.enum';

@Entity('partner_subscriptions')
export class PartnerSubscription extends BaseEntity{
  @Column({type: 'enum', enum: TourServiceType})
  serviceType: TourServiceType;
}
