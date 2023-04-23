import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class BaseEntity {
  @ApiProperty({
    description: '主键id',
  })
  @PrimaryGeneratedColumn({ comment: '主键id' })
  id: string;
  @ApiProperty({
    description: '更新时间',
  })
  @UpdateDateColumn({ comment: '更新时间' })
  updateTime: Date;
  @ApiProperty({
    description: '创建时间',
  })
  @CreateDateColumn({ comment: '创建时间' })
  createTime: Date;
  @ApiProperty({
    description: '创建人',
  })
  @Column({
    comment: '创建人',
    nullable: true,
  })
  @Exclude()
  createUserId: string;

  @ApiProperty({
    description: '更新人',
  })
  @Column({
    comment: '更新人',
    nullable: true,
  })
  @Exclude()
  updateUserId: string;
}
