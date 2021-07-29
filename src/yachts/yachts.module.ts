import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YachtEntity } from './yacht.entity';
import { YachtsController } from './yachts.controller';
import { YachtsService } from './yachts.service';

@Module({
  providers: [YachtsService],
  controllers:[
    YachtsController
  ],
  imports:[
    TypeOrmModule.forFeature([YachtEntity])
  ]
})
export class YachtsModule {}
