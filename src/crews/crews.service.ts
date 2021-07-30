import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrewEntity } from './crew.entity';

@Injectable()
export class CrewsService {
    
    constructor(@InjectRepository(CrewEntity)private rep:Repository<CrewEntity>){
    }

    async getAllCrewMemebers():Promise<CrewEntity[]>{
        return await this.rep.find();
    }

    async getACrewMember(_id_crew:number):Promise<CrewEntity[]>{
        return await this.rep.findByIds(
            [
                _id_crew
            ]
        )

    }

    async updateCrewMember(crew:CrewEntity){
        await this.rep.update({id_crew:crew.id_crew},crew);
    }

    async deleteCrewMember(crew:CrewEntity){
        await this.rep.delete(crew);
    }

    async createCrewMember(crew:CrewEntity){
        await this.rep.insert(crew);
    }
}
