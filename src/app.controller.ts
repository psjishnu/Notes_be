import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { name: string } {
    return { name: 'Jishnu' };
  }

  @Get('jishnu')
  @Render('jishnu')
  root() {
    return { message: 'Hai jishnu' };
  }
}
