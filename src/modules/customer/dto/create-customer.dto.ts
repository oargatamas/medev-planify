import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from '../../user/dto/create-user.dto';


export class CreateCustomerDto extends PartialType(CreateUserDto){
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  title: string;
}
