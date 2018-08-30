import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UppercaseDirective } from './common/uppercase.directive';
import { appRoutes } from './app.routes';

import { BookModule } from './book/book.module';

@NgModule({
  declarations: [AppComponent, UppercaseDirective],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
