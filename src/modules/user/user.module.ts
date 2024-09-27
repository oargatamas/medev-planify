import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TourModule } from '../tour/tour.module';

@Module({
  imports: [TourModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
