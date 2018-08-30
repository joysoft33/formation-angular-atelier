import { Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NewBookComponent } from './new-book/new-book.component';
import { NewAuthorComponent } from './new-author/new-author.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'newBook',
        component: NewBookComponent
      },
      {
        path: 'newAuthor',
        component: NewAuthorComponent
      }
    ]
  }
];
