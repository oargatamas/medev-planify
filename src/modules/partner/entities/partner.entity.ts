import { Column, Entity, OneToMany } from 'typeorm';
import { PartnerContactType } from '../enums/partner_contact_type.enum';
import { PartnerSubscription } from './subcription.entity';
import { User } from '../../user/entities/user.entity';
import { PartnerContact } from './contact.entity';

@Entity('partners')
export class Partner extends User {
  @Column()
  name: string;

  @Column({type: 'enum', enum: PartnerContactType})
  contactType: PartnerContactType;

  @Column(() => PartnerContact)
  contact: PartnerContact;

  @OneToMany(() => PartnerSubscription, (sub) => sub.partner)
  subscriptions: PartnerSubscription[];
}
