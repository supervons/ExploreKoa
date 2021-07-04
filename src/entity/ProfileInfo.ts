import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';
/**
 * @author supervons
 * ProfileInfo Entity.
 * Save user profile info, such as theme/motto and so on.
 */
@Entity({ name: 'tb_profile_info' })
export class ProfileInfo extends BaseEntity {
  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'avatar_id' })
  avatarId: string;

  @Column({ name: 'theme' })
  theme: string;

  @Column({ name: 'motto' })
  motto: string;
}
