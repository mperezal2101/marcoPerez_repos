import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repositories } from './entities/repositories.entity';

@Injectable()
export class RepositoriesService {

    constructor(@InjectRepository(Repositories)
    private repository:Repository<Repositories>
    ){}

    findAll(){
        return this.repository.find();
    }

    async findOne(id:number){

    }

    async create(body:{name:string}){
        const organization = new Repositories();
        // add var

        this.repository.save(organization);
    }


    delete(id:number){
        this.repository.delete(id);
    }

}
