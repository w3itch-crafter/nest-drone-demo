import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("log: hello")
    return 'Hello World! - fail';
  }
}
