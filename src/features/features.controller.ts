import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { features } from 'process';
import { FeatureEntity } from './feature.entity';
import { FeaturesService } from './features.service';

@Controller('features')
export class FeaturesController {
    
    constructor(private service:FeaturesService){

    }

    @Get()
    getAllFeatures(){
        return this.service.getAllFeatures();
    }
    
    @Get(':id')//El parametro va en la misma direccion
    getUser(@Param() params){
        return this.service.getFeature(params.id);
    }

    @Post()
    addUser(@Body()feature:FeatureEntity){
        this.service.createFeature(feature);
    }

    @Put()
    updateF(@Body() features:FeatureEntity){
    this.service.updateFeature(features);
    }

    //@Patch(atributo:string){
    //    return "Actualizacion de Atributo"
    //}

    @Delete(":id")
    deleteY(@Param() params){
        this.service.deleteFeature(params.id);
        
    }
}
