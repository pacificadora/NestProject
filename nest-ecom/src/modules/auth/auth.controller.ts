/* eslint-disable prettier/prettier */
import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req) {
    console.log("abcdefghijklmnopqrstuvwxyz");
    return this.authService.generateToken(req.user);
  }
}
