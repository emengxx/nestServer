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

import {
  ClassSerializerInterceptor,
  Module,
  ValidationPipe,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

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
  providers: [
    AppService,
    {
      //管道 用于验证数据 例如：验证用户是否存在
      provide: APP_PIPE,
      useFactory: () => {
        return new ValidationPipe({
          whitelist: true, //过滤掉不符合验证规则的数据
          forbidNonWhitelisted: true, //当有不符合验证规则的数据时，抛出异常
          transform: true, //自动转换数据类型
        });
      },
    },
    {
      // 序列化
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
