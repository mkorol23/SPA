import { Injectable } from '@angular/core';
import { DataService } from './data';
import { AnalyticsService } from './analytics';

@Injectable()
export class AppLogicService {
  constructor(
    private dataService: DataService,
    private analytics: AnalyticsService
  ) { }

  getDataAndLog(): string[] {
    const data = this.dataService.getData();
    this.analytics.logEvent(`Дані отримано. Кількість елементів: ${data.length}`);
    return data;
  }
}
