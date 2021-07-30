import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ServiceEntity } from './service.entity';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {

    constructor(private service:ServicesService){

    }

    @Get()
    getAllServices(){
        return this.service.getAllServices();
    }

    @Get(':id')//El parametro va en la misma direccion
    getUser(@Param() params){
        return this.service.getService(params.id);
    }

    @Post()
    addUser(@Body()service:ServiceEntity){
        this.service.createService(service);
        return{
            status:HttpStatus.OK,
            message:"The image has been uploaded",
            data:service
        }
    }


    @Put()
    updateUser(@Body() service:ServiceEntity){
    this.service.updateService(service);
    }

    //@Patch(atributo:string){
    //    return "Actualizacion de Atributo"
    //}

    @Delete(":id")
    deleteUser(@Param() params){
        this.service.deleteService(params.id);
        
    }


}
