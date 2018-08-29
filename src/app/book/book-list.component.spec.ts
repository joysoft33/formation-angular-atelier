import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { BookListComponent } from './book-list.component';
import { BookService } from './book.service';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  const mockBookService = jasmine.createSpyObj('BookService', {
    getBooks: of([
      {
        id: 1,
        title: 'TUTU',
        author: {
          firstName: '',
          lastName: ''
        }
      }, {
        id: 2,
        title: 'TOTO',
        author: {
          firstName: '',
          lastName: ''
        }
      }
    ])
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent],
      providers: [{ provide: BookService, useValue: mockBookService }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains two app-book components', async(() => {
    const items = fixture.debugElement.query(By.css('a'));
    // TODO: detect the two components !!!
    expect(items).toBeTruthy();
  }));

});
