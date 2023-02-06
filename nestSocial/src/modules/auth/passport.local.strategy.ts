import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserEntity } from '../users/user.entity';
import { UserService } from '../users/user.service';

@Injectable()
export class Localstrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super();
  }

  async validate(username: string, password: string): Promise<UserEntity> {
    const user: UserEntity = await this.userService.getUserByUsername(
      username,
      password,
    );

    if (user) return user;
    if (user == undefined) throw new UnauthorizedException('User Not found');
    if (user.password != password)
      throw new UnauthorizedException('Invalid password');
    /* if (user === undefined) throw new UnauthorizedException();
    if (user != undefined && user.password === password) return user;
    else throw new UnauthorizedException(); */
  }
}
