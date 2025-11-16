import { afterNextRender, Component, computed, inject, signal, viewChild } from '@angular/core';
import {
  NgxScannerQrcodeComponent
} from 'ngx-scanner-qrcode';
import { Products } from '../products';
import { Product } from '../product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-picking',
  imports: [NgxScannerQrcodeComponent, CurrencyPipe],
  templateUrl: './picking.html',
  styleUrl: './picking.scss'
})
export class Picking {
  private productsService = inject(Products);
  readonly scanner = viewChild.required(
    NgxScannerQrcodeComponent
  );
  items = signal<Product[]>([]);
  cost = computed(() => this.items().map(items => items.price).reduce((a: number, b: number) => a + b, 0));

  constructor() {
    afterNextRender(() => {
      this.scanner().start();
      
      this.scanner().data.subscribe(data => {
        if (data.length) {
          this.getProduct(data[0].value);
        }
      });
    });
  }

  private getProduct(code: string) {
    const id = code.substring(code.lastIndexOf('/') + 1);
    
    this.productsService.getSingle(Number(id)).subscribe(p => {
      if (!this.items().find(p => p.id === Number(id))) {
        this.items.update(i => [...i, p]);
        this.scanner().data.next([]);
      }
    });
  }
}
