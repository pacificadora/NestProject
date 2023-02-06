import { ExecutionContext } from '@nestjs/common';
import { CanActivate } from '@nestjs/common';

export class CustomRoleGuard implements CanActivate {
  private rolePassed: string;

  constructor(role: string) {
    console.log('inside customGuard contructor');
    this.rolePassed = role;
  }

  canActivate(context: ExecutionContext): boolean {
    console.log('inside custom activator');

    const ctx = context.switchToHttp();
    const request: any = ctx.getRequest<Request>();
    return this.rolePassed === request.user.role;
  }
}
