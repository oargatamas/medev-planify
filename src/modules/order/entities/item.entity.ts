import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { Price } from '../../../shared/entities/price.entity';

@Entity('order_items')
export class OrderItem extends BaseEntity{
  @Column(() => Price)
  price: Price;
}
