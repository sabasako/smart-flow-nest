import { Controller, Get, Post, Body } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  getData() {
    return this.dataService.getData();
  }

  @Post()
  addData(@Body() newData) {
    this.dataService.addData(newData);
    return { message: 'Data received successfully', data: newData };
  }
}
