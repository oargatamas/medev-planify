import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Customer } from '../customer/entities/customer.entity';
import { Partner } from '../partner/entities/partner.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserProps } from './interfaces/create-user-props';


export abstract class UserService {
  private userRepository: Repository<Customer | Partner>;

  protected constructor(repository: Repository<Customer | Partner>) {

    this.userRepository = repository;
  }

  findOneByUsername(emailOrUsername: string): Promise<User> {
    return this.userRepository.findOneOrFail({
      where: [
        { email: emailOrUsername },
        { username: emailOrUsername },
      ],
    });
  }

  updatePassword(id: number, newPass: string) {
    //Todo make the hash prior storing it.
    return `This action updates a #${id} user`;
  }

  protected async mapUserProps(createUserDto: CreateUserDto): Promise<CreateUserProps> {
    const now = new Date();
    return {
      username: createUserDto.username,
      email: createUserDto.email,
      passwordHash: await bcrypt.hash(createUserDto.password, 10),
      isVerified: false,
      createdAt: now,
      updatedAt: now,
      lastLogin: now, // Todo remove it from here and make it optional
    };
  }
}
