import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { RepositoriesService } from './repositories.service';

@Controller('repositories')
export class RepositoriesController {

    constructor(private service:RepositoriesService){

    }

    @Get()
    getMetrics(){
       return this.service.findAll();
    }

    @Post()
    create(@Body()body:{name:string}){
        this.service.create(body);
    }

    @Delete(':id')
    deleteMetrics(@Param('id') id:number){
        this.service.delete(id);
    }

}
