import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrganizationService } from '../organization/organization.service';
import { Tribu } from './entities/tribu.entity';

@Injectable()
export class TribuService {

    constructor(@InjectRepository(Tribu)
    private repository:Repository<Tribu>,
    private organization:OrganizationService
    ){}

    findAll(){
        return this.repository.find({
            relations: ['organization',],
          });
    }

    async findOne(id:number){

    }

    async create(body:{name:string, idOrganization:number}){
        const organization = await this.organization.findOne(body.idOrganization); 
        const tribu = new Tribu();
        tribu.name = body.name;
        tribu.status = 1;
        tribu.organization = organization;
        this.repository.save(tribu);
    }


    delete(id:number){
        this.repository.delete(id);
    }
    
}
