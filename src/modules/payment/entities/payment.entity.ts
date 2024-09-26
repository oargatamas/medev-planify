import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';

@Entity('payment')
export class Payment extends BaseEntity{
  @Column()
  state: string;

  @Column()
  retryAttempts: string;

  @Column()
  paymentReference: string;

  @Column()
  invoiceReference: string;
}
