import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from './service.entity';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

@Module({
  providers: [ServicesService],
  controllers:[
    ServicesController
  ],
  imports:[
    TypeOrmModule.forFeature([ServiceEntity])
  ]
})
export class ServicesModule {}
