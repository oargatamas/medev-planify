import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { User } from '../../user/entities/user.entity';
import { Order } from '../../order/entities/order.entity';
import { Document } from '../../document/entities/document.entity';
import { TourService } from './service.entity';

@Entity('tours')
export class Tour extends BaseEntity{
  @Column()
  name: string;

  @Column()
  isArchived: boolean;

  @Column()
  progress: number;

  @ManyToOne(() => User, (user) => user.tours)
  user: User;

  @OneToOne(() => Order)
  @JoinColumn()
  order: Order;

  @ManyToMany(() => Document)
  @JoinTable()
  documents: Document[];

  @OneToMany(() => TourService, (service) => service.tour)
  services: TourService[];
}
