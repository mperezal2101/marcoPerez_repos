import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TribuService } from './tribu.service';

@Controller('tribu')
export class TribuController {

    constructor(private service:TribuService){

    }

    @Get()
    getMetrics(){
       return this.service.findAll();
    }

    @Post()
    create(@Body()body:{name:string, idOrganization:number}){
        this.service.create(body);
    }

    @Delete(':id')
    deleteTribu(@Param('id') id:number){
        this.service.delete(id);
    }



}
