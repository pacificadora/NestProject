/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwTAuthGuard } from './modules/auth/guards/jwt.guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('???????????????');
  //app.useGlobalGuards(new JwTAuthGuard());
  await app.listen(3000);
}
bootstrap();
