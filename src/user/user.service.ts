import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import * as md5 from 'md5';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.password = md5(createUserDto.password);
    return this.usersRepository.save(user);
  }

  findAll(ids?: string[]): Promise<User[]> {
    return ids
      ? this.usersRepository.findByIds(ids)
      : this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }
  findOneByUserId(userId: string): Promise<User> {
    return this.usersRepository.findOneBy({ userId });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    // 更新用户信息
    return this.usersRepository.update(id, updateUserDto);
  }

  validator(username: string, password: string) {
    return this.usersRepository.findOne({ where: { username, password } });
    // return this.usersRepository.exist({ username, password });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
