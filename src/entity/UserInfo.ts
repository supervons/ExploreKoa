/**
 * UserInfo Entity
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_user_info' })
export class UserInfo {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'login_id' })
  loginId: string;

  @Column({ select: false, name: 'pass_word' })
  password: string;

  @Column({ name: 'user_name' })
  userName: string;

  @Column({ name: 'user_age' })
  userAge: number;

  @Column({ name: 'user_sex' })
  userSex: string;

  @Column({ name: 'user_type' })
  userType: string;

  @Column({ name: 'user_address' })
  userAddress: string;

  @Column({ name: 'user_cellphone' })
  userCellphone: string;

  @Column({ select: false, name: 'create_time' })
  createTime: string;

  @Column({ select: false, name: 'update_time' })
  updateTime: string;
}
