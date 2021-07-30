import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { customName } from 'src/users/utils/customname';
import { YachtEntity } from './yacht.entity';
import { YachtsService } from './yachts.service';

@Controller('yachts')
export class YachtsController {

    constructor(private service:YachtsService){

    }

    @Get()
    getAllUsers(){
        return this.service.getAllYachts();
    }
    
    @Get(':id')//El parametro va en la misma direccion
    getUser(@Param() params){
        return this.service.getYacht(params.id);
    }

    @Post()
    addUser(@Body()yacht:YachtEntity){
        this.service.createYacht(yacht);
    }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('image',{
            storage: diskStorage({
                destination:'./avatars', 
                filename:customName
            })
            
        })
    )
    async uploadFile(@Body() yacht:YachtEntity, @UploadedFile() file){
        yacht.image = file.filename;

        await this.service.createYacht(JSON.parse(JSON.stringify(yacht)));

        const response ={
            originalName: file.originalname,
            finalName: file.filename
        }

        return{
            status:HttpStatus.OK,
            message:"The image has been uploaded",
            data:response
        }
    }

    @Put()
    updateUser(@Body() yacht:YachtEntity){
    this.service.updateYacht(yacht);
    }

    //@Patch(atributo:string){
    //    return "Actualizacion de Atributo"
    //}

    @Delete(":id")
    deleteUser(@Param() params){
        this.service.deleteYacht(params.id);
        
    }
    
}



