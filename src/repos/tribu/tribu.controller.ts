import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TribuService } from './tribu.service';
import { TribeRequest } from './dto/TribeRequest';

@Controller('tribu')
export class TribuController {
  constructor(private service: TribuService) {}

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
}
