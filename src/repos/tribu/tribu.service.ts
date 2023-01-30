import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrganizationService } from '../organization/organization.service';
import { Tribu } from './entities/tribu.entity';
import { TribeRequest } from './dto/TribeRequest';

@Injectable()
export class TribuService {
  constructor(
    @InjectRepository(Tribu)
    private repository: Repository<Tribu>,
    private organization: OrganizationService,
  ) {}

  findAll() {
    return this.repository.find({
      relations: ['organization'],
    });
  }

  async findOne(id: number) {
    const tribe = await this.repository.findOne({
      where: { id_tribe: id },
      relations: { repositories: true, organization: true },
    });

    if (!tribe) {
      throw new NotFoundException(`Tribe ${id} not found`);
    }

    return tribe;
  }

  async create(body: TribeRequest) {
    const organization = await this.organization.findOne(body.idOrganization);
    const tribe = new Tribu();
    tribe.name = body.name;
    tribe.status = 1;
    tribe.organization = organization;
    await this.repository.save(tribe);
  }

  delete(id: number) {
    this.repository.delete(id);
  }
}
