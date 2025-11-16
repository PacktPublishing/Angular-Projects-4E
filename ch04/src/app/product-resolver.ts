import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Products } from './products';
import { Product } from './product';

export const productResolver: ResolveFn<Product> = route => {
  const id = Number(route.paramMap.get('id'));
  return inject(Products).getSingle(id);
};
