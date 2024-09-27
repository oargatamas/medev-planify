import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { TourServiceType } from '../../../shared/enums/tour-service-type.enum';
import { Tour } from './tour.entity';
import { TourOffer } from './offer.entity';

@Entity('tour_services')
export class TourService extends BaseEntity{
  @Column({type: 'enum', enum: TourServiceType})
  serviceType: TourServiceType;

  @ManyToOne(() => Tour, (tour) => tour.services)
  tour: Tour;

  @OneToMany(() => TourOffer, (offer) => offer.service)
  offers: TourOffer[];




}
