import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatButtonToggleModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { AdminComponent } from './admin.component';
import { NewBookComponent } from './new-book/new-book.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { adminRoutes } from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRoutes),
    TranslateModule.forChild(),
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [AdminComponent, NewBookComponent, NewAuthorComponent],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
