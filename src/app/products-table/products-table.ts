import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Product = {
  name: string;
  category: string;
  price: number;
  stockCount: number;
};

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-table.html',
  styleUrl: './products-table.css',
})
export class ProductsTable {
  products: Product[] = [
    { name: 'Зошит', category: 'Канцтовари', price: 25, stockCount: 12 },
    { name: 'Рюкзак', category: 'Аксесуари', price: 180, stockCount: 3 },
    { name: 'Навушники', category: 'Електроніка', price: 320, stockCount: 0 },
    { name: 'Пляшка для води', category: 'Спорт', price: 70, stockCount: 8 },
    { name: 'Флешка 64GB', category: 'Електроніка', price: 210, stockCount: 0 },
  ];
}
