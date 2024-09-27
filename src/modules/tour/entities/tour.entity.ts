import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { Order } from '../../order/entities/order.entity';
import { Document } from '../../document/entities/document.entity';
import { TourService } from './service.entity';
import { Customer } from '../../customer/entities/customer.entity';

@Entity('tours')
export class Tour extends BaseEntity{
  @Column()
  name: string;

  @Column()
  isArchived: boolean;

  @Column()
  progress: number;

  @ManyToOne(() => Customer, (customer) => customer.tours)
  customer: Customer;

  @OneToOne(() => Order)
  @JoinColumn()
  order: Order;

  @ManyToMany(() => Document)
  @JoinTable()
  documents: Document[];

  @OneToMany(() => TourService, (service) => service.tour)
  services: TourService[];
}
