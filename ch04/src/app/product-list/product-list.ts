import { Component, inject } from '@angular/core';
import { Products } from '../products';
import { toSignal } from '@angular/core/rxjs-interop';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [SlicePipe, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  products = toSignal(inject(Products).getAll());
}
