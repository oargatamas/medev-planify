import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateBasicEntityProps } from '../interfaces/create-basic-entity.props';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  protected constructor(props: CreateBasicEntityProps) {
    this.createdAt = props?.createdAt;
    this.updatedAt = props?.updatedAt;
  }

}