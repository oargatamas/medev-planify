import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller()
export class AppController {
  constructor(
    private configService: ConfigService,
    private readonly appService: AppService
  ) {

  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
