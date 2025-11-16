import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { productResolver } from './product-resolver';
import { Picking } from './picking/picking';

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'picking', component: Picking },
  {
    path: ':id',
    component: ProductDetail,
    resolve: {
      product: productResolver
    }
  }
];
