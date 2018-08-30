import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { NewBookComponent } from './new-book.component';
import { BookService } from '../../book/book.service';

describe('NewBookComponent', () => {
  let component: NewBookComponent;
  let fixture: ComponentFixture<NewBookComponent>;

  const mockBookService = jasmine.createSpyObj('BookService', {
    create: of(
      {
        id: 1,
        firstName: 'TOTO',
        lastName: 'TUTU'
      }
    )
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewBookComponent],
      imports: [FormsModule],
      providers: [
        { provide: BookService, useValue: mockBookService },
        { provide: Router, useValue: {} }
      ]
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
