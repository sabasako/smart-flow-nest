import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  private dataStore;

  getData() {
    return this.dataStore;
  }

  addData(newData) {
    this.dataStore.push(newData);
  }
}
