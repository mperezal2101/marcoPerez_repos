import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationRequest } from './dto/OrganizationRequest';

@Controller('organization')
export class OrganizationController {
  constructor(private service: OrganizationService) {}

  @Get()
  getOrganizations() {
    return this.service.findAll();
  }

  @Get(':id')
  getOrganization(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() request: OrganizationRequest) {
    this.service.create(request);
  }

  @Delete(':id')
  deleteOrganization(@Param('id') id: number) {
    this.service.delete(id);
  }
}
