/**
 * Verify info entity
 */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity({ name: 'tb_verify_info' })
export class VerifyInfo extends BaseEntity {
  @Column({ name: 'uid' })
  uId: string;

  @Column({ name: 'type' })
  type: string;

  @Column({ name: 'code' })
  code: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'usable' })
  usable: number;

  @Column({ name: 'sended' })
  sended: number;

  @Column({ name: 'expiration_time' })
  expirationTime: number;
}
