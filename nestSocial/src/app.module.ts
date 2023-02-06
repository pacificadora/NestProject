import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './modules/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfigAsync } from './config/typeorm.config';
import { PostModule } from './modules/posts/post.module';
import { CommentModule } from './modules/comments/comment.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(ormConfigAsync),
    AuthModule,
    UserModule,
    PostModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [],
  // providers: [{
  //   provide: 'APP_GUARD',
  //   useClass: CustomRoleGuard
  //   }, // enable route gaurd globally for jwt authentication
  // ],
})
export class AppModule {}
