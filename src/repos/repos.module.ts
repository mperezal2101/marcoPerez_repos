import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationController } from './organization/organization.controller';
import { TribuController } from './tribu/tribu.controller';
import { RepositoriesController } from './repositories/repositories.controller';
import { MetricsController } from './metrics/metrics.controller';
import { OrganizationService } from './organization/organization.service';
import { MetricsService } from './metrics/metrics.service';
import { TribuService } from './tribu/tribu.service';
import { RepositoriesService } from './repositories/repositories.service';

import { Repositories } from './repositories/entities/repositories.entity';
import { Tribu } from './tribu/entities/tribu.entity'
import { Organization } from './organization/entities/organization.entity';
import { Metrics } from './metrics/entities/metrics.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Repositories, Tribu, Organization, Metrics])],
  controllers: [OrganizationController, TribuController, RepositoriesController, MetricsController],
  providers: [OrganizationService, MetricsService, TribuService, RepositoriesService]
})
export class ReposModule {}
