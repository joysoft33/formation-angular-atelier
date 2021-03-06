import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule, MatCardModule, MatButtonModule } from '@angular/material';

import { BookStoreComponent } from './book-store.component';
import { BookListComponent } from './book-list.component';
import { BookComponent } from './book.component';
import { bookRoutes } from './book.routes';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(bookRoutes),
    TranslateModule.forChild(),
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [BookStoreComponent, BookListComponent, BookComponent],
  bootstrap: [BookStoreComponent]
})
export class BookModule { }
