import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { PartnerContactType } from '../enums/partner_contact_type.enum';
import { PartnerSubscription } from './subcription.entity';

@Entity('partners')
export class Partner extends BaseEntity {
  @Column()
  name: string;

  @Column({type: 'enum', enum: PartnerContactType})
  contactType: PartnerContactType;

  @OneToMany(() => PartnerSubscription, (sub) => sub.partner)
  subscriptions: PartnerSubscription[];
}
