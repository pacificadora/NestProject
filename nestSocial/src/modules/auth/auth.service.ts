import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/user.entity';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  generateToken(payload: UserEntity): string {
    return this.jwtService.sign({ ...payload });
  }
}
