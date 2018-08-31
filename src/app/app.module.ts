import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule, MatMenuModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UppercaseDirective } from './common/uppercase.directive';
import { BookModule } from './book/book.module';
import { appRoutes } from './app.routes';
import { appTranslate } from './app.translate';
import { AppTranscludeComponent } from './app-transclude/app-transclude.component';

@NgModule({
  declarations: [AppComponent, UppercaseDirective, AppTranscludeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BookModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    TranslateModule.forRoot(appTranslate),
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
