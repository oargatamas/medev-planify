import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { PartnerContactType } from '../enums/partner_contact_type.enum';

@Entity('partners')
export class Partner extends BaseEntity {
  @Column()
  name: string;

  @Column({type: 'enum', enum: PartnerContactType})
  contactType: PartnerContactType;
}
