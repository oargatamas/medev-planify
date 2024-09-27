import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { CustomerService } from '../customer/customer.service';
import { PartnerService } from '../partner/partner.service';


@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
    private partnerService: PartnerService,
    private jwtService: JwtService
  ) {}

  async customerSignIn(username: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.customerService.findOneByUsername(username);
    return this.login(user, pass);
  }

  async partnerSignIn(username: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.partnerService.findOneByUsername(username);
    return this.login(user, pass);
  }

  async login(user : User, pass: string): Promise<{ access_token: string }>{
    if (user?.passwordHash !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}