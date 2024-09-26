import { CurrencyCode } from '../enums/currencies.enum';
import { Column } from 'typeorm';


export class Price {
  @Column()
  net: number;

  @Column()
  gross: number;

  @Column()
  vat: number;

  @Column({ type: 'enum', enum: CurrencyCode })
  currency: CurrencyCode;
}
