import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { TourServiceType } from '../../../shared/enums/tour_service_type.enum';
import { Partner } from './partner.entity';

@Entity('partner_subscriptions')
export class PartnerSubscription extends BaseEntity{
  @Column({type: 'enum', enum: TourServiceType})
  serviceType: TourServiceType;

  @ManyToOne(() => Partner, (partner) => partner.subscriptions)
  partner: Partner;
}
