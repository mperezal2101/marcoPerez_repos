import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Metrics } from './entities/metrics.entity';
import { MetricsDto } from './dto/MetricsDto';
import { RepositoriesService } from '../repositories/repositories.service';

@Injectable()
export class MetricsService {
  constructor(
    @InjectRepository(Metrics)
    private repository: Repository<Metrics>,
    private repoService: RepositoriesService,
  ) {}

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const metric = await this.repository.findOne({
      where: { id_metric: id },
    });

    if (!metric) {
      throw new NotFoundException(`Metric ${id} not found`);
    }

    return metric;
  }

  async create(body: MetricsDto) {
    const repo = await this.repoService.findOne(body.idRepository);
    const metric = new Metrics();
    metric.bugs = body.bugs;
    metric.code_smells = body.code_smells;
    metric.coverage = body.coverage;
    metric.hostpot = body.hostpot;
    metric.vulnerabilities = body.vulnerabilities;
    metric.repository = repo;

    await this.repository.save(metric);
  }

  delete(id: number) {
    this.repository.delete(id);
  }
}
