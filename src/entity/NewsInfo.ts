/**
 * FileInfo Entity
 */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity({ name: 'tb_news_info' })
export class NewsInfo extends BaseEntity {
  @Column({ name: 'news_title' })
  newsTitle: string;

  @Column({ name: 'news_content' })
  newsContent: string;

  @Column({ name: 'create_user_id' })
  createUserId: string;
}
