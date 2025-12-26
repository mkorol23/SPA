import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  getData(): string[] {
    return ['Apple', 'Banana', 'Orange', 'Grapes'];
  }
}
