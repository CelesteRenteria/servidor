import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceEntity } from './service.entity';

@Injectable()
export class ServicesService {
    
    constructor(@InjectRepository(ServiceEntity)private rep:Repository<ServiceEntity>){
    }

    async getAllServices():Promise<ServiceEntity[]>{
        return await this.rep.find();
    }

    async getService(_id_service:number):Promise<ServiceEntity[]>{
        return await this.rep.findByIds(
            [
                _id_service
            ]
        )

    }

    async updateService(servicio:ServiceEntity){
        await this.rep.update({id_service:servicio.id_service},servicio);
    }

    async deleteService(servicio:ServiceEntity){
        await this.rep.delete(servicio);
    }

    async createService(servicio:ServiceEntity){
        await this.rep.insert(servicio);
    }
}
