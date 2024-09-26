import { Country } from '../enums/countries.enum';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('vat_code')
export class VatCode extends BaseEntity{
  @Column({ type: 'enum', enum: Country })
  country: Country;

  @Column()
  vatPercent: number;
}
