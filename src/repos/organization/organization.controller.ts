import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { OrganizationService } from './organization.service';

@Controller('organization')
export class OrganizationController {

    constructor(private service:OrganizationService){

    }

    @Get()
    getOrganizations(){
       return this.service.findAll();
    }

    @Post()
    create(@Body()body:{name:string}){
        this.service.create(body);
    }

    @Delete(':id')
    deleteOrganization(@Param('id') id:number){
        this.service.delete(id);
    }

}
