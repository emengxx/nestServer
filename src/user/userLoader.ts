import { Injectable } from '@nestjs/common';
import {
  InvalidUserException,
  UserLoaderInterface,
} from '@switchit/nestjs-oauth2-server';
import { User } from 'src/user/entities/user.entity';
import { UserService } from './user.service';

/*
 * @Author: your name
 * @Date: 2021-11-07 23:19:55
 * @LastEditTime: 2021-11-08 22:52:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /auth-server/src/oauth2/userLoader.ts
 */
@Injectable()
export class UserLoader implements UserLoaderInterface {
  // constructor(private readonly userService: UserService) {}

  async load(userId: string): Promise<User> {
    // const user = this.userService.findOneByUserId(userId);
    // const user = 1
    // if (user) return user;
    throw InvalidUserException.withId(userId);
  }
}
