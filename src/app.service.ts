import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API made in Nestjs with the topic of yachts. <p>Entities: Yachts, Crews and Features</p>';
  }
}
