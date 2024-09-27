import { Column, Entity, OneToMany } from 'typeorm';
import { Tour } from '../../tour/entities/tour.entity';
import { User } from '../../user/entities/user.entity';
import { CreateCustomerProps } from '../interfaces/create-customer-props';

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

  constructor(props: CreateCustomerProps) {
    super(props);
    this.firstName = props?.firstName;
    this.lastName = props?.lastName;
    this.title = props?.title;
  }
}
