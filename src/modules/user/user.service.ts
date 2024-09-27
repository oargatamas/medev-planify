import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { Customer } from '../customer/entities/customer.entity';

@Injectable()
export class UserService {
  private userService: Repository<User>;

  constructor(dataSource: DataSource) {
    this.userService = dataSource.getRepository(User);
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOneByEmail(email: string): Promise<User | null> {
    //return this.userService.findOneBy({ email });
    const customer = new Customer();
    customer.email = "tudomtom@gmail.com";
    customer.passwordHash = "supersecretpasswordnotinplaintext"
    return Promise.resolve(customer);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
