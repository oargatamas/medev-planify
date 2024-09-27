import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { Tour } from '../../tour/entities/tour.entity';

@Entity('users')
export class User extends BaseEntity{
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

  @OneToMany(() => Tour, (tour) => tour.user)
  tours: Tour[];
}
