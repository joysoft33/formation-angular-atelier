import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { NewBookComponent } from './new-book.component';
import { BookService } from '../../book/book.service';
import { AuthorService } from '../author.service';

describe('NewBookComponent', () => {
  let component: NewBookComponent;
  let fixture: ComponentFixture<NewBookComponent>;

  const mockAuthorService = jasmine.createSpyObj('AuthorService', {
    getAuthors: of([
      {
        id: 1,
        firstName: 'TOTO',
        lastName: 'TUTU'
      },
      {
        id: 2,
        firstName: 'TATA',
        lastName: 'TITI'
      }
    ])
  });

  const mockBookService = jasmine.createSpyObj('BookService', {
    create: of(
      {
        id: 1,
        title: 'TITLE',
        firstName: 'TOTO',
        lastName: 'TUTU'
      }
    )
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewBookComponent],
      imports: [FormsModule, TranslateModule.forRoot()],
      providers: [
        { provide: AuthorService, useValue: mockAuthorService },
        { provide: BookService, useValue: mockBookService },
        { provide: Router, useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
