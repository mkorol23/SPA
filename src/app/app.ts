import { Component } from '@angular/core';

import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Sidebar } from './sidebar/sidebar';
import { MainContent } from './main-content/main-content';
import { UserProfile } from './user-profile/user-profile';
import { ProductsTable } from './products-table/products-table';
import { QuizComponent } from './quiz/quiz';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Footer,
    Sidebar,
    MainContent,
    ProductsTable,
    QuizComponent,
    UserProfile
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App { }
