import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatMenuModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UppercaseDirective } from './common/uppercase.directive';
import { BookModule } from './book/book.module';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent, UppercaseDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BookModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
