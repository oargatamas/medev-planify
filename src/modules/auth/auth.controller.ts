import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CreatePartnerDto } from '../partner/dto/create-partner.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('customer/login')
  customerSignIn(@Body() signInDto: Record<string, any>) {
    return this.authService.customerSignIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('customer/register')
  customerSignUp(@Body() signUpDto: CreateCustomerDto) {
    //Todo add reCaptcha
    return this.authService.customerSignUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('partner/login')
  partnerSignIn(@Body() signInDto: Record<string, any>) {
    return this.authService.partnerSignIn(signInDto.username, signInDto.password);
  }


  @HttpCode(HttpStatus.OK)
  @Post('partner/register')
  partnerSignUp(@Body() signUpDto: CreatePartnerDto) {
    //Todo add reCaptcha
    return this.authService.partnerSignUp(signUpDto);
  }
}
