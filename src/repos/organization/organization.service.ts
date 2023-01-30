import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';
import { OrganizationRequest } from './dto/OrganizationRequest';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private repository: Repository<Organization>,
  ) {}

  findAll() {
    return this.repository.find({
      relations: {
        tribes: true,
      },
    });
  }

  async findOne(id: number) {
    const organization = await this.repository.findOne({
      where: { id: id },
      relations: { tribes: true },
    });

    if (!organization) {
      throw new NotFoundException(`Organization ${id} not found`);
    }

    return organization;
  }

  async create(request: OrganizationRequest) {
    const organization = new Organization();
    organization.name = request.name;
    organization.status = 1;
    await this.repository.save(organization);
  }

  delete(id: number) {
    this.repository.delete(id);
  }
}
