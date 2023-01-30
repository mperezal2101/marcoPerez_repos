import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Parser} from '@json2csv/plainjs';
import {Repository} from 'typeorm';
import {OrganizationService} from '../organization/organization.service';
import {Tribu} from './entities/tribu.entity';
import {TribeRequest} from './dto/TribeRequest';

@Injectable()
export class TribuService {
  constructor(
      @InjectRepository(Tribu)
      private repository: Repository<Tribu>,
      private organization: OrganizationService,
  ) {
  }

  findAll() {
    return this.repository.find({
      relations: ['organization'],
    });
  }

  async findOne(id: number) {
    const tribe = await this.repository.findOne({
      where: {id_tribe: id},
      relations: {repositories: true, organization: true},
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

  async getMetrics(idTribe: number) {
    const report = await this.repository.createQueryBuilder('tribe')
    .select('tribe.name', 'TRIBE')
    .addSelect('repositories.name', 'REPOSITORY NAME')
    .addSelect('repositories.id_repository', 'REPOSITORY ID')
    .addSelect('organization.name', 'ORGANIZATION NAME')
    .addSelect('metrics.coverage', 'COVERAGE')
    .addSelect('metrics.code_smells', 'CODE SMELLS')
    .addSelect('metrics.bugs', 'BUGS')
    .addSelect('metrics.vulnerabilities', 'VULNERABILITIES')
    .addSelect('metrics.hostpot', 'HOSTPOT')
    .addSelect('repositories.status', 'REPOSITORY STATUS')
    .leftJoin('tribe.repositories', 'repositories')
    .leftJoin('tribe.organization', 'organization')
    .leftJoin('repositories.metrics', 'metrics')
    .where('tribe.id_tribe = :idTribe', {idTribe: idTribe})
    .getRawMany();

    try {
      const parser = new Parser();
      const csv = parser.parse(report);
      console.log(csv);

      return csv;
    } catch (err) {
      console.error(err);
    }

  }
}
