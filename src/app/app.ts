import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLogicService } from './app-logic';
import { DataService } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  providers: [DataService, AppLogicService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  data: string[] = [];

  constructor(private appLogic: AppLogicService) { }

  loadData() {
    this.data = this.appLogic.getDataAndLog();
  }
}
