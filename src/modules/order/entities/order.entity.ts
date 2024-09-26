import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { Price } from '../../../shared/entities/price.entity';
import { Payment } from '../../payment/entities/payment.entity';
import { OrderItem } from './item.entity';
import { VatCode } from '../../../shared/entities/vat_code.entity';

@Entity('orders')
export class Order extends BaseEntity{
  @Column(() => Price)
  total: Price;

  @OneToOne(() => VatCode)
  @JoinColumn()
  vatCode: VatCode;

  @OneToOne(() => Payment)
  @JoinColumn()
  payment: Payment;

  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[];
}
