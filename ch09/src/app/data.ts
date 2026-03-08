import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { map } from 'rxjs';

interface Category {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class Data {
  private http = inject(HttpClient);

  getCategories() {
    return this.http.get<Category[]>(
      'http://localhost:3000/categories'
    );
  }

  getItems(categoryId: string) {
    return this.http.get<{ id: string, data: Item[] }>(
      'http://localhost:3000/items/' + categoryId
    ).pipe(
      map(items => items.data)
    );
  }
}
