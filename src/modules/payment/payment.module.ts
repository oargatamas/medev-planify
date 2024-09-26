import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { TourModule } from '../tour/tour.module';

@Module({
  controllers: [],
  providers: [PaymentService],
})
export class PaymentModule {}
