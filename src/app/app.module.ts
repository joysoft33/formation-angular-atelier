import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UppercaseDirective } from './common/uppercase.directive';
import { BookModule } from './book/book.module';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent, UppercaseDirective],
  imports: [
    BrowserModule,
    BookModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
