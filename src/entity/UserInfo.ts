/**
 * UserInfo Entity
 */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity({ name: 'tb_user_info' })
export class UserInfo extends BaseEntity {
  @Column({ name: 'uid' })
  uId: string;

  @Column({ name: 'user_name' })
  userName: string;

  @Column({ select: false, name: 'pass_word' })
  password: string;

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
}
