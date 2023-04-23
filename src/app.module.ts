/**
 * File: /src/app.module.ts
 * Project: nestjs
 * Created Date: Sunday, November 7th 2021, 11:24:06 pm
 * Author:haohe
 *
 * @description:
 *
 * Last Modified: Sun Nov 07 2021
 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      password: 'He5031063',
      database: 'backend',
      port: 3306,
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
