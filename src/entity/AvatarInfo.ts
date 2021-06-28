/**
 * FileInfo Entity
 */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity({ name: 'tb_avatar_info' })
export class AvatarInfo extends BaseEntity {
  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'file_id' })
  fileId: number;

  @Column({ name: 'status' })
  status: string;
}
