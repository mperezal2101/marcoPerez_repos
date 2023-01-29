import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Controller('metrics')
export class MetricsController {

    constructor(private service:MetricsService){

    }

    @Get()
    getMetrics(){
       return this.service.findAll();
    }

    @Post()
    create(@Body()body:{bugs:number, coverage:number, vulnerabilities:number, hostpot:number, code_smells:number}){
        this.service.create(body);
    }

    @Delete(':id')
    deleteMetrics(@Param('id') id:number){
        this.service.delete(id);
    }


}

