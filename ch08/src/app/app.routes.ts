import { Routes } from '@angular/router';
import {
  EmployeeBuilder
} from './employee-builder/employee-builder';
import { Shifts } from './shifts/shifts';

export const routes: Routes = [
  { path: 'employees', component: EmployeeBuilder },
  { path: 'shifts', component: Shifts }
];
