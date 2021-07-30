import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeatureEntity } from './feature.entity';

@Injectable()
export class FeaturesService {

    constructor(@InjectRepository(FeatureEntity)private rep:Repository<FeatureEntity>){
    }

    async getAllFeatures():Promise<FeatureEntity[]>{
        return await this.rep.find();
    }

    async getFeature(_id_feature:number):Promise<FeatureEntity[]>{
        return await this.rep.findByIds(
            [
                _id_feature
            ]
        )

    }

    async updateFeature(feature:FeatureEntity){
        await this.rep.update({id_feature:feature.id_feature},feature);
    }

    async deleteFeature(feature:FeatureEntity){
        await this.rep.delete(feature);
    }

    async createFeature(feature:FeatureEntity){
        await this.rep.insert(feature);
    }
}
