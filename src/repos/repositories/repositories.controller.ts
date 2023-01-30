import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RepositoriesService } from './repositories.service';
import { RepositoryRequest } from './dto/RepositoryRequest';

@Controller('repositories')
export class RepositoriesController {
  constructor(private service: RepositoriesService) {}

  @Get()
  getRepositories() {
    return this.service.findAll();
  }

  @Get(':id')
  getRepository(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: RepositoryRequest) {
    this.service.create(body);
  }

  @Delete(':id')
  deleteMetrics(@Param('id') id: number) {
    this.service.delete(id);
  }
}
