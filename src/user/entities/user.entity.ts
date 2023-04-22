/*
 * @Author: your name
 * @Date: 2021-11-07 15:02:44
 * @LastEditTime: 2021-11-07 23:23:27
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /auth-server/src/user/entities/user.entity.ts
 */

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({
  orderBy: {
    username: 'ASC',
    id: 'DESC',
  },
})
export class User {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({length:100})
  username: string;
  @Column({length:100})
  email: string;
  @Column({length:100})
  password: string;
  @PrimaryColumn()
  userId: string;
  @UpdateDateColumn()
  updateTime: string;
  @CreateDateColumn()
  createTime: string;
}
