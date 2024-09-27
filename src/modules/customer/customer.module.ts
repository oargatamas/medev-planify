import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TourModule } from '../tour/tour.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TourModule, UserModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
