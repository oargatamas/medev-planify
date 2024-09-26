import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { TourService } from './service.entity';
import { Price } from '../../../shared/entities/price.entity';
import { Document } from '../../document/entities/document.entity';
import { Message } from '../../message/entities/message.entity';

@Entity('tour_service_offers')
export class TourOffer extends BaseEntity{

  @Column()
  externalReference: string;

  @Column()
  isChoose: boolean;

  @Column()
  isPayed: boolean;

  @Column()
  isVerified: boolean;

  @Column(() => Price)
  total: Price;

  @ManyToOne(() => TourService, (service) => service.offers)
  service: TourService;

  @ManyToMany(() => Document)
  @JoinTable()
  documents: Document[];

  @OneToMany(() => Message, (message) => message.offer)
  messages: Message[];
}
