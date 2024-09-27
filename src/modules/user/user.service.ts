import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Customer } from '../customer/entities/customer.entity';
import { Partner } from '../partner/entities/partner.entity';


export abstract class UserService {
  private userRepository: Repository<Customer | Partner>;

  protected constructor(repository: Repository<Customer | Partner>) {

    this.userRepository = repository;
  }

  findOneByUsername(emailOrUsername: string): Promise<User> {
    return this.userRepository.findOneOrFail({
      where: {
        email: emailOrUsername,
        username: emailOrUsername,
      },
    });
  }

  updatePassword(id: number, newPass: string) {
    //Todo make the hash prior storing it.
    return `This action updates a #${id} user`;
  }

}
