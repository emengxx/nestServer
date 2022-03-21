/*
 * @Author: your name
 * @Date: 2021-11-07 15:02:44
 * @LastEditTime: 2021-11-07 23:55:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /auth-server/src/user/user.service.ts
 */
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    const uuid = randomUUID();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.userId = uuid;
    return this.usersRepository.save(user);
  }

  findAll(ids?: number[]): Promise<User[]> {
    return ids
      ? this.usersRepository.findByIds(ids)
      : this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }
  findOneByUserId(userId: string): Promise<User> {
    return this.usersRepository.findOne({ userId });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  validator(username: string, password: string) {
    return this.usersRepository.findOne({ username, password });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
