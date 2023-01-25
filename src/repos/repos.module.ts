import { Module } from '@nestjs/common';
import { OrganizationController } from './organization/organization.controller';
import { TribuController } from './tribu/tribu.controller';
import { RepositoriesController } from './repositories/repositories.controller';
import { MetricsController } from './metrics/metrics.controller';
import { OrganizationService } from './organization/organization.service';
import { MetricsService } from './metrics/metrics.service';
import { TribuService } from './tribu/tribu.service';
import { RepositoriesService } from './repositories/repositories.service';

@Module({
  controllers: [OrganizationController, TribuController, RepositoriesController, MetricsController],
  providers: [OrganizationService, MetricsService, TribuService, RepositoriesService]
})
export class ReposModule {}
