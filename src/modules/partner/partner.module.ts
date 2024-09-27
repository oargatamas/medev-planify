import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { MessageModule } from '../message/message.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [MessageModule, UserModule],
  controllers: [PartnerController],
  providers: [PartnerService],
})
export class PartnerModule {}
