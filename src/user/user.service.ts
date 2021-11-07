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
    private usersRepository: Repository<User>) { }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    const uuid = randomUUID()
    user.userName = createUserDto.userName
    user.password = createUserDto.password
    user.userId = uuid
    return this.usersRepository.save(user)
  }

  findAll(ids?: number[]): Promise<User[]> {
    return ids ? this.usersRepository.findByIds(ids) : this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  validator(userName: string, password: string) {
    return this.usersRepository.findOne({ userName, password })
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
