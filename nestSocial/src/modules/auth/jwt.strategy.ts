import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from '../users/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    console.log('inside constructor');

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'key',
    });
  }

  validate(payload: any): any {
    console.log('payload------------', payload);
    return payload;
  }

  // async validate(payload: any): Promise<CreateAuthDto> {
  //   const { email, password } = payload;
  //   const user = await this.userService.getUserByEmail(email);
  //   if (!user) throwAppError(AppErrors.UNAUTHORIZED);
  //   return { userId, email, originalUserId };
  // }
}
