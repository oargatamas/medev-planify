import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('customer/login')
  customerSignIn(@Body() signInDto: Record<string, any>) {
    return this.authService.customerSignIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('partner/login')
  partnerSignIn(@Body() signInDto: Record<string, any>) {
    return this.authService.partnerSignIn(signInDto.username, signInDto.password);
  }
}
