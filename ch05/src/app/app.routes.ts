import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.routes')
      .then(m => m.WELCOME_ROUTES)
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('./pages/tickets/tickets.routes')
        .then(m => m.TICKETS_ROUTES)
  },
  {
    path: 'cars',
    loadChildren: () =>
      import('./pages/cars/cars.routes')
        .then(m => m.CARS_ROUTES)
  }
];
