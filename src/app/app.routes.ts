import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }
];
