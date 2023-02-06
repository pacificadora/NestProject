/* eslint-disable prettier/prettier */
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv'
dotenv.config()

export default class TypeOrmConfig{
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions{
    return {
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      migrationsRun: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }
  }
}

export const ormConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.
  getOrmConfig(configService),
  inject: [ConfigService]
};
