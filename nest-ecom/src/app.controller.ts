/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(){}

  @Get()
  getHello(): string {
    return "hi";
  }
}
