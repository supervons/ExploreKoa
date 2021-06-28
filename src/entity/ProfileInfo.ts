/**
 * FileInfo Entity
 */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity({ name: 'tb_profile_info' })
export class ProfileInfo extends BaseEntity {
  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'avatar_id' })
  avatarId: number;

  @Column({ name: 'theme' })
  theme: string;

  @Column({ name: 'motto' })
  motto: string;
}
