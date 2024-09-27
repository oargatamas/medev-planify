import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import securityConfig from '../../config/security';
import { CustomerModule } from '../customer/customer.module';
import { PartnerModule } from '../partner/partner.module';

@Module({
  imports: [
    CustomerModule,
    PartnerModule,
    JwtModule.registerAsync({
      useFactory: async () => securityConfig(),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
