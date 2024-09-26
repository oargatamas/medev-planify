import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from '../order/order.module';
import { DocumentModule } from '../document/document.module';
import { MessageModule } from '../message/message.module';

@Module({
  imports: [
    OrderModule,
    DocumentModule,
    MessageModule,
  ],
  controllers: [TourController],
  providers: [TourService],
})
export class TourModule {}
