import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Expenses } from './expenses/expenses';
import { Buildings } from './buildings/buildings';

export const routes: Routes = [
  { path: '', component: Welcome },
  { path: 'buildings', component: Buildings },
  { path: 'buildings/:id', component: Expenses }
];
