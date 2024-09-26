import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { Tour } from '../../tour/entities/tour.entity';

@Entity('customers')
export class Customer extends BaseEntity{
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  isVerified: boolean;

  @Column()
  passwordHash: string;

  @Column()
  lastLogin: Date;

  @OneToMany(() => Tour, (tour) => tour.customer)
  tours: Tour[];
}
