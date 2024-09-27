import { Column } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';


export abstract class User extends BaseEntity{
  @Column()
  email: string;

  @Column()
  isVerified: boolean;

  @Column()
  passwordHash: string;

  @Column()
  lastLogin: Date;
}
