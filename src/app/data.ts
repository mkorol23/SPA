import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData(): string[] {
    return ['Apple', 'Banana', 'Orange', 'Grapes'];
  }
}
