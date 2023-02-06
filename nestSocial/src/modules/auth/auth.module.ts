import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport/dist';
import { UserModule } from '../users/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { Localstrategy } from './passport.local.strategy';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: 'key',
      signOptions: {
        expiresIn: '900s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [Localstrategy, AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
