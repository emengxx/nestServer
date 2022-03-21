/*
 * @Author: your name
 * @Date: 2021-11-07 22:26:12
 * @LastEditTime: 2021-11-07 23:26:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /auth-server/src/oauth2/userValidator.ts
 */
import { Injectable } from '@nestjs/common';
import {
  InvalidUserException,
  UserValidatorInterface,
} from '@switchit/nestjs-oauth2-server';

import { User } from 'src/user/entities/user.entity';
import { UserService } from './user.service';

@Injectable()
export class UserValidator implements UserValidatorInterface {
  // constructor(private readonly userService: UserService) {}

  async validate(username, password): Promise<User> {
    // const user = this.userService.validator(username, password);
    // if (user) {
    //   return user;
    // }
    throw InvalidUserException.withUsernameAndPassword(username, password);
  }
}
