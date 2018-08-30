import { Routes } from '@angular/router';

import { BookStoreComponent } from './book-store.component';
import { BookListComponent } from './book-list.component';
import { BookComponent } from './book.component';

export const bookRoutes: Routes = [
  {
    path: 'books',
    component: BookStoreComponent,
    children: [
      {
        path: '',
        component: BookListComponent
      },
      {
        path: ':id',
        component: BookComponent
      }
    ]
  }
];
