import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { DocumentModule } from '../document/document.module';

@Module({
  imports: [DocumentModule],
  providers: [MessageService],
})
export class MessageModule {}
