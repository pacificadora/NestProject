import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { JwTAuthGuard } from './modules/auth/jwt.guard';
dotenv.config();
// import { JwTAuthGuard } from './modules/auth/jwt.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new JwTAuthGuard()); //this will implement the jwt authguard globally (excepts the url that we specified to exclude)
  await app.listen(process.env['PORT']);
}
bootstrap();
