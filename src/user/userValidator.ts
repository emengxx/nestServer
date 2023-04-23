/**
 * @description: 用户验证器
 */
import { Injectable } from '@nestjs/common';

import { User } from 'src/user/entities/user.entity';
import { UserService } from './user.service';

@Injectable()
export class UserValidator {
  constructor(private readonly userService: UserService) {}

  async validate(username, password): Promise<User> {
    const user = this.userService.validator(username, password);
    if (user) {
      return user;
    } else {
      throw new Error('用户名或密码错误');
    }
    // throw InvalidUserException.withUsernameAndPassword(username, password);
  }
}
