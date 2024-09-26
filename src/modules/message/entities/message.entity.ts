import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';

@Entity('messages')
export class Message extends BaseEntity{
  @Column()
  fromPartner: boolean;

  @Column()
  message: string;
}
