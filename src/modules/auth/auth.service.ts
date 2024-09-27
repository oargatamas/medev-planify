import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from '../customer/customer.service';
import { PartnerService } from '../partner/partner.service';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CreatePartnerDto } from '../partner/dto/create-partner.dto';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
    private partnerService: PartnerService,
    private jwtService: JwtService
  ) {}

  async customerSignIn(username: string, pass: string): Promise<{ access_token: string }> {
    return this.signIn(this.customerService, username, pass);
  }

  async partnerSignIn(username: string, pass: string): Promise<{ access_token: string }> {
    return this.signIn(this.partnerService, username, pass);
  }

  private async signIn(userService: UserService, username: string,  pass: string): Promise<{ access_token: string }>{
    const user = await userService.findOneByUsername(username);
    const isMatch = await bcrypt.compare(pass, user?.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    //Todo add role claims to the JWT
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async customerSignUp(signUpDto: CreateCustomerDto) {
    await this.customerService.create(signUpDto);
  }

  async partnerSignUp(signUpDto: CreatePartnerDto) {
    await this.partnerService.create(signUpDto);
  }


}