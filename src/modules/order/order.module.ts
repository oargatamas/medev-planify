import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { PaymentModule } from '../payment/payment.module';
import { DocumentModule } from '../document/document.module';

@Module({
  imports: [
    PaymentModule,
    DocumentModule,
  ],
  providers: [OrderService],
})
export class OrderModule {}
