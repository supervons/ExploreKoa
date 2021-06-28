import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'create_time' })
  createTime: string;

  @Column({ name: 'update_time' })
  updateTime: string;
}