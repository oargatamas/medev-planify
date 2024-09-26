import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { Customer } from '../../customer/entities/customer.entity';

@Entity('tours')
export class Tour extends BaseEntity{
  @Column()
  name: string;

  @Column()
  isArchived: boolean;

  @Column()
  progress: number;

  @Column()
  customer: Customer;
}
