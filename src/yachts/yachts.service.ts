import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { YachtEntity } from './yacht.entity';

@Injectable()
export class YachtsService {

    constructor(@InjectRepository(YachtEntity)private rep:Repository<YachtEntity>){
    }

    async getAllYachts():Promise<YachtEntity[]>{
        return await this.rep.find();
    }

    async getYacht(_id_yacht:number):Promise<YachtEntity[]>{
        return await this.rep.findByIds(
            [
                _id_yacht
            ]
        )

    }

    async updateYacht(yacht:YachtEntity){
        await this.rep.update({id_yacht:yacht.id_yacht},yacht);
    }

    async deleteYacht(yacht:YachtEntity){
        await this.rep.delete(yacht);
    }

    async createYacht(yacht:YachtEntity){
        await this.rep.insert(yacht);
    }
}
