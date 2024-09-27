import { Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { UserService } from '../user/user.service';
import { DataSource, Repository } from 'typeorm';
import { Partner } from './entities/partner.entity';

@Injectable()
export class PartnerService extends UserService{

  private partnerRepository: Repository<Partner>;

  constructor(dataSource : DataSource) {
    const repository = dataSource.getRepository(Partner);
    super(repository);
    this.partnerRepository = repository;
  }

  async create(createPartnerDto: CreatePartnerDto) {
    const partner = new Partner({
      ... await this.mapUserProps(createPartnerDto),
      name: createPartnerDto.name,
      contactType: createPartnerDto.contactType,
      //Todo map partner contact ...
    });
    return this.partnerRepository.save(partner);
  }

  findAll() {
    return `This action returns all partner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partner`;
  }

  update(id: number, updatePartnerDto: UpdatePartnerDto) {
    return `This action updates a #${id} partner`;
  }

  remove(id: number) {
    return `This action removes a #${id} partner`;
  }
}
