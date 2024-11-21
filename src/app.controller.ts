import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'mongoose';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('/')
  
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
  getHello(): string {
    return this.appService.getHello();
   
  }
}
