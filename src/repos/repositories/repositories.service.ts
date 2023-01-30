import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repositories } from './entities/repositories.entity';
import { RepositoryRequest } from './dto/RepositoryRequest';
import { TribuService } from '../tribu/tribu.service';

@Injectable()
export class RepositoriesService {
  constructor(
    @InjectRepository(Repositories)
    private repository: Repository<Repositories>,
    private tribeService: TribuService,
  ) {}

  findAll() {
    return this.repository.find({
      relations: ['tribe'],
    });
  }

  async findOne(id: number) {
    const repo = await this.repository.findOne({
      where: { id_repository: id },
      relations: { metrics: true },
    });

    if (!repo) {
      throw new NotFoundException(`Repository ${id} not found`);
    }

    return repo;
  }

  async create(body: RepositoryRequest) {
    const tribe = await this.tribeService.findOne(body.idTribe);
    const repo = new Repositories();
    repo.name = body.name;
    repo.tribe = tribe;

    await this.repository.save(repo);
  }

  delete(id: number) {
    this.repository.delete(id);
  }
}
