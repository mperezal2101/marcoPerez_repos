import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationService {
    
    constructor(@InjectRepository(Organization)
    private repository:Repository<Organization>
    ){}

    findAll(){
        return this.repository.find();
    }

    async findOne(id:number){
        return this.repository.findOneBy(
            {
                id: id
            }
        );
    }

    async create(body:{name:string}){
        const organization = new Organization();
        organization.name = body.name;
        organization.status = 1;
        this.repository.save(organization);
    }


    delete(id:number){
        this.repository.delete(id);
    }


}



