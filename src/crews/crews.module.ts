import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrewEntity } from './crew.entity';
import { CrewsController } from './crews.controller';
import { CrewsService } from './crews.service';

@Module({
  providers: [CrewsService],
  controllers:[
    CrewsController
  ],
  imports:[
    TypeOrmModule.forFeature([CrewEntity])
  ]
})
export class CrewsModule {}
