import { Component, computed, input, model, output } from '@angular/core';
import { Item } from '../item';
import { Drawer } from 'primeng/drawer';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';

interface CartItem {
  name: string;
  qty: number;
}

@Component({
  selector: 'app-cart',
  imports: [Drawer, TableModule, Button, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  readonly visible = model(false);
  readonly items = input<Item[]>([]);
  readonly checkout = output();
  readonly cart = computed(() => {
    const cart: CartItem[] = [];
    
    this.items().forEach(item => {
      const existed = cart.find(i => i.name === item.name);
      if (!existed) {
        cart.push({ name: item.name, qty: 1 });
      } else {
        existed.qty += 1;
      }
    });
    
    return cart;
  });
  readonly cost = computed(() => {
    return this.items()
      .map(item => item.price)
      .reduce((x: number, y: number) => x + y, 0);
  });
  readonly discount = computed(() => {
    return this.items()
      .map(item => item.discount ? item.price * item.discount : 0)
      .reduce((x: number, y: number) => x + y, 0);
  });
}
