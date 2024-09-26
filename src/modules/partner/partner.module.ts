import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { MessageModule } from '../message/message.module';

@Module({
  imports: [MessageModule],
  controllers: [PartnerController],
  providers: [PartnerService],
})
export class PartnerModule {}
