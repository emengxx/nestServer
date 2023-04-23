/*
 * @Author: your name
 * @Date: 2021-11-07 15:02:44
 * @LastEditTime: 2021-11-07 23:23:27
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /auth-server/src/user/entities/user.entity.ts
 */

import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/database/baseEntity';
import { Exclude } from 'class-transformer';

@Entity({
  orderBy: {
    username: 'ASC',
    updateTime: 'DESC',
  },
})
export class User extends BaseEntity {
  @ApiProperty({ description: '用户名' })
  @Column({ length: 100 })
  username: string;
  @ApiProperty({ description: '邮箱' })
  @Column({ length: 100, nullable: true })
  email: string;
  @Column({ length: 100 })
  @Exclude()
  password: string;
  @PrimaryColumn()
  @Generated('uuid')
  @ApiProperty({ description: '用户id' })
  userId: string;
}
