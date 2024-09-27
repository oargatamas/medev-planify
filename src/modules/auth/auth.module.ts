import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import securityConfig from '../../config/security';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useFactory: async () => securityConfig(),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
