import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';

@Entity('partner_contacts')
export class PartnerContact extends BaseEntity{
  @Column()
  email: string;

  @Column()
  webhook: string;

  @Column()
  webhookApiKey: string;

  @Column()
  webHookApiSecret: string;
}
