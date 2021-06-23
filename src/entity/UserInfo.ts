/**
 * 实体类，映射数据库
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'login_id' })
  loginId: string;

  @Column({ select: false, name: 'pass_word' })
  password: string;

  @Column({ name: 'user_name' })
  userName: string;

  @Column({ name: 'user_sex' })
  userSex: string;

  @Column({ name: 'user_address' })
  userAddress: string;

  @Column({ name: 'user_cellphone' })
  userCellphone: string;

  @Column({ name: 'user_type' })
  userType: string;

  @Column({ name: 'belongs_user' })
  belongsUser: string;

  @Column({ name: 'create_time' })
  createTime: string;

  @Column({ name: 'update_time' })
  updateTime: string;
}
