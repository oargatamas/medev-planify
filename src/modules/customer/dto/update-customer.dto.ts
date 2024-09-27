import { ApiProperty, PartialType } from '@nestjs/swagger';
import { UpdateUserDto } from '../../user/dto/update-user.dto';

export class UpdateCustomerDto extends PartialType(UpdateUserDto){
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  title: string;
}
