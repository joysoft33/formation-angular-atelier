import { Routes } from '@angular/router';

import { BookListComponent } from './book/book-list.component';
import { BookComponent } from './book/book.component';

export const appRoutes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/:id',
    component: BookComponent
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];
