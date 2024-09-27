import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { UserService } from '../user/user.service';
import { Customer } from './entities/customer.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CustomerService extends UserService{
  private customerRepository: Repository<Customer>;

  constructor(dataSource : DataSource) {
    const repository = dataSource.getRepository(Customer);
    super(repository);
    this.customerRepository = repository;
  }

  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
