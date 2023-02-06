import { Controller, Get } from '@nestjs/common';
import { AuthService } from './modules/auth/auth.service';
import { UserService } from './modules/users/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return 'this is the string';
  }

  // @Post('/login')
  // @UseGuards(AuthGuard('local'))
  // async getUser(@Body() reqBody): Promise<string> {
  //   if ( await this.userService.getUserByUsername(reqBody.username, reqBody.password))
  //     console.log('logging user\n', reqBody);
  //     return await this.authService.generateToken(reqBody);
  // }
}
