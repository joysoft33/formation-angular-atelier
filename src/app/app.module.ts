import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list.component';
import { UppercaseDirective } from './common/uppercase.directive';
import { BookComponent } from './book/book.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent, BookListComponent, UppercaseDirective, BookComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
