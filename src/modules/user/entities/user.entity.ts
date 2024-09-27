import { Column } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { CreateUserProps } from '../interfaces/create-user-props';

export abstract class User extends BaseEntity{
  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  isVerified: boolean;

  @Column()
  passwordHash: string;

  @Column()
  lastLogin: Date;

  protected constructor(props: CreateUserProps) {
    super(props);
    this.email = props?.email;
    this.username = props?.username;
    this.passwordHash = props?.passwordHash;
    this.isVerified = props?.isVerified;
    this.lastLogin = props?.lastLogin;
  }
}
