import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { Price } from '../../../shared/entities/price.entity';

@Entity('orders')
export class Order extends BaseEntity{
  @Column(() => Price)
  total: Price;
}
