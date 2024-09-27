import { Column, Entity, OneToMany } from 'typeorm';
import { Tour } from '../../tour/entities/tour.entity';
import { User } from '../../user/entities/user.entity';

@Entity('customers')
export class Customer extends User{
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  title: string;

  @OneToMany(() => Tour, (tour) => tour.customer)
  tours: Tour[];
}
