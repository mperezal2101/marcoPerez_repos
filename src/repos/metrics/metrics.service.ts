import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Metrics } from './entities/metrics.entity';

@Injectable()
export class MetricsService {

    constructor(@InjectRepository(Metrics)
    private repository:Repository<Metrics>
    ){}

    findAll(){
        return this.repository.find();
    }

    async findOne(id:number){

    }

    async create(body:{bugs:number, coverage:number, vulnerabilities:number, hostpot:number, code_smells:number}){
        const metric = new Metrics();
        metric.bugs=body.bugs;
        metric.code_smells=body.code_smells;
        metric.coverage=body.coverage;
        metric.hostpot=body.hostpot;
        metric.vulnerabilities=body.vulnerabilities;


        this.repository.save(metric);
    }


    delete(id:number){
        this.repository.delete(id);
    }


}


