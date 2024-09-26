import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { Price } from '../../../shared/entities/price.entity';
import { Order } from './order.entity';
import { TourOffer } from '../../tour/entities/offer.entity';

@Entity('order_items')
export class OrderItem extends BaseEntity{
  @Column(() => Price)
  price: Price;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @OneToOne(() => TourOffer)
  @JoinColumn()
  offer: TourOffer;
}
