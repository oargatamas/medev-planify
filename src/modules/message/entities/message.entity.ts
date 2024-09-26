import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { TourOffer } from '../../tour/entities/offer.entity';

@Entity('messages')
export class Message extends BaseEntity{
  @Column()
  fromPartner: boolean;

  @Column()
  message: string;

  @ManyToOne(() => TourOffer, (offer) => offer.messages)
  offer: TourOffer;
}
