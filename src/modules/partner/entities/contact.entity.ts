import { Column } from 'typeorm';

export class PartnerContact{
  @Column()
  email: string;

  @Column()
  webhook: string;

  @Column()
  webhookApiKey: string;

  @Column()
  webHookApiSecret: string;
}
