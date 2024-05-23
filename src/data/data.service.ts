// src/data/data.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  async processData(data: any) {
    const { a, b } = data;
    // Process data (e.g., save to database, perform calculations, etc.)
    console.log(`Received data: a = ${a}, b = ${b}`);
    return { message: 'Data received successfully', data };
  }
}
