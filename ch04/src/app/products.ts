import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class Products {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<Product[]>(
      'https://fakestoreapi.com/products'
    );
  }

  getSingle(id: number) {
    return this.http.get<Product>(
      'https://fakestoreapi.com/products/' + id
    );
  }
}
