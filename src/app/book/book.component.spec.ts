import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { BookComponent } from './book.component';
import { BookService } from './book.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  const mockBookService = jasmine.createSpyObj('BookService', {
    get: of(
      {
        id: 1,
        title: 'TOTO',
        author: {
          firstName: '',
          lastName: ''
        }
      }
    )
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      providers: [
        {
          provide: BookService,
          useValue: mockBookService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (key) => '1' })
          }
        }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect a valid title', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain(
      'TOTO'
    );
  }));

  it('should refresh the book', async(() => {
    component.book.title = 'Le JS pour les nulls';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain(
      'Le JS pour les nulls'
    );
  }));

});
