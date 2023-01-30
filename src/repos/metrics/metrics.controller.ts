import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsDto } from './dto/MetricsDto';

@Controller('metrics')
export class MetricsController {
  constructor(private service: MetricsService) {}

  @Get()
  getMetrics() {
    return this.service.findAll();
  }

  @Get(':id')
  getMetric(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: MetricsDto) {
    this.service.create(body);
  }

  @Delete(':id')
  deleteMetrics(@Param('id') id: number) {
    this.service.delete(id);
  }
}
