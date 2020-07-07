import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSasi(): string {
    return '<h1>Sasi</h1>';
  }
}
