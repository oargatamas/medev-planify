import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';

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
}
