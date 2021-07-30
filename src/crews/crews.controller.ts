import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CrewEntity } from './crew.entity';
import { CrewsService } from './crews.service';

@Controller('crews')
export class CrewsController {
    constructor(private service:CrewsService){

    }

    @Get()
    getAllUsers(){
        return this.service.getAllCrewMemebers();
    }
    
    @Get(':id')//El parametro va en la misma direccion
    getUser(@Param() params){
        return this.service.getACrewMember(params.id);
    }

    @Post()
    addUser(@Body()crew:CrewEntity){
        this.service.createCrewMember(crew);
    }


    @Put()
    updateUser(@Body() yacht:CrewEntity){
    this.service.updateCrewMember(yacht);
    }

    //@Patch(atributo:string){
    //    return "Actualizacion de Atributo"
    //}

    @Delete(":id")
    deleteUser(@Param() params){
        this.service.deleteCrewMember(params.id);
        
    }
}
