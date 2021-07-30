import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeatureEntity } from './feature.entity';
import { FeaturesController } from './features.controller';
import { FeaturesService } from './features.service';

@Module({
  providers: [FeaturesService],
  controllers:[
    FeaturesController
  ],
  imports:[
    TypeOrmModule.forFeature([FeatureEntity])
  ]
})
export class FeaturesModule {}
