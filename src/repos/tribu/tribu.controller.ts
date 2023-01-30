import {Body, Controller, Delete, Get, Param, Post, Res} from '@nestjs/common';
import {Response} from 'express';
import {TribuService} from './tribu.service';
import {TribeRequest} from './dto/TribeRequest';

@Controller('tribu')
export class TribuController {
  constructor(private service: TribuService) {
  }

  @Get()
  getTribes() {
    return this.service.findAll();
  }

  @Get(':id')
  getTribe(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: TribeRequest) {
    this.service.create(body);
  }

  @Delete(':id')
  deleteTribu(@Param('id') id: number) {
    this.service.delete(id);
  }

  @Get('report/:id')
  async export(@Param('id') id: number,
               @Res() res: Response) {
    const csv = await this.service.getMetrics(id);
    res.header('Content-Type', 'text/csv');
    res.attachment('report.csv');
    return res.send(csv);
  }
}
