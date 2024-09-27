import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentDto {

  @ApiProperty()
  fileName: string;
}
