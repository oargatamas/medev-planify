import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { MimeTypes } from '../../../shared/enums/mimetypes.enum';

@Entity('documents')
export class Document extends BaseEntity{

  @Column()
  fileName: string;

  @Column()
  path: string;

  @Column({type: 'enum', enum: MimeTypes})
  mimeType: string;

  @Column()
  sizeInBytes: number;
}
