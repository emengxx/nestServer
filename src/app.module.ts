/*
 * @Author: your name
 * @Date: 2021-11-07 14:37:39
 * @LastEditTime: 2021-11-20 19:02:20
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /auth-server/src/app.module.ts
 */
import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Oauth2Module } from '@switchit/nestjs-oauth2-server';

import { UserValidator } from './user/userValidator';
import { UserLoader } from './user/userLoader';

@Module({
  imports: [
    // CqrsModule,

    UserModule,
    TypeOrmModule.forRoot(),

    Oauth2Module.forRoot({
      userLoader: new UserLoader(),
      userValidator: new UserValidator(),
    }),
    // Oauth2Module.forRootAsync({
    //   imports: [UserModule],
    //   useFactory: async (userValidator, userLoader) => ({
    //     userValidator,
    //     userLoader,
    //   }),
    //   inject: [UserValidator, UserLoader],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
