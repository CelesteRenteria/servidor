import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(3000);
  app.use(cors());
  await app.listen(process.env.PORT || 8080);
  
}
bootstrap();


function cors(): any {
  throw new Error('Function not implemented.');
}

