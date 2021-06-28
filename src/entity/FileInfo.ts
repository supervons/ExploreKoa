/**
 * FileInfo Entity
 */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';
@Entity({ name: 'tb_file_info' })
export class FileInfo extends BaseEntity {
  @Column({ name: 'file_name' })
  fileName: string;

  @Column({ name: 'file_size' })
  fileSize: number;

  @Column({ name: 'file_type' })
  fileType: string;

  @Column({ name: 'file_path' })
  filePath: string;

  @Column({ name: 'file_access_path' })
  fileAccessPath: string;
}
