import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TourModule } from '../tour/tour.module';

@Module({
  imports: [TourModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
