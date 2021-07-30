import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { YachtsController } from './yachts/yachts.controller';
import { ServicesController } from './services/services.controller';
import { CrewsController } from './crews/crews.controller';
import { YachtsModule } from './yachts/yachts.module';
import { CrewsModule } from './crews/crews.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath:join(__dirname, '..','avatars')
    }),
    YachtsModule,
    CrewsModule,
    ServicesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
