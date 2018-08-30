import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NewBookComponent } from './new-book/new-book.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { adminRoutes } from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [AdminComponent, NewBookComponent, NewAuthorComponent],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
