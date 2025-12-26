import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, switchMap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users$ = this.api.getUsers();

  selectedUserId$ = new BehaviorSubject<number>(1);
  posts$ = this.selectedUserId$.pipe(
    switchMap(id => this.api.getPostsByUserId(id))
  );

  constructor(private api: ApiService) { }

  selectUser(id: number) {
    this.selectedUserId$.next(id);
  }
}
