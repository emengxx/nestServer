
import { UserInterface } from "src/interface/userInterface";
import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity({
  orderBy: {
    userName: "ASC",
    id: "DESC"
  }
})
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userName: string;
  @Column()
  password: string;
  @PrimaryColumn()
  userId: string;
  @UpdateDateColumn()
  updateTime: string;
  @CreateDateColumn()
  createTime: string;

}
