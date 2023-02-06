import { ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Constants } from 'src/utils/constants';

export class JwTAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    console.log('inside custom activator');

    const ctx = context.switchToHttp();
    const request: any = ctx.getRequest<Request>();
    for (let x = 0; x < Constants.BY_PASS_URLS.length; x++) {
      if (request.url == Constants.BY_PASS_URLS[x]) {
        return true;
      }
    }
    return super.canActivate(context);
  }
}
