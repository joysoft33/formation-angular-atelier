import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list.component';
import { UppercaseDirective } from './common/uppercase.directive';

@NgModule({
  declarations: [AppComponent, BookListComponent, UppercaseDirective],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
