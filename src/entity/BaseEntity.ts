import { Column, PrimaryGeneratedColumn } from 'typeorm';
/**
 * @author supervons
 * Base Entity.
 * Unified common column,such as id/createTime/updateTime.
 */
export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'create_time' })
  createTime: string;

  @Column({ name: 'update_time' })
  updateTime: string;
}
