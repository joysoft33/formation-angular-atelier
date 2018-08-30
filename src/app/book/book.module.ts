import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BookStoreComponent } from './book-store.component';
import { BookListComponent } from './book-list.component';
import { BookComponent } from './book.component';
import { bookRoutes } from './book.routes';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(bookRoutes)
  ],
  declarations: [BookStoreComponent, BookListComponent, BookComponent],
  bootstrap: [BookStoreComponent]
})
export class BookModule { }
