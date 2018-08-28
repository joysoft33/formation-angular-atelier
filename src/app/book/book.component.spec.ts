import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BookComponent } from './book.component';
import { BookService } from './book.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  const mockBookService = jasmine.createSpyObj('BookService', {
    getBooks: of([{
      id: 1,
      title: 'TUTU',
      author: {
        firstName: '',
        lastName: ''
      }}])
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      providers: [
        { provide: BookService, useValue: mockBookService }
      ]
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
    expect(compiled.querySelector('.title').textContent).toContain('Titre: TUTU');
  }));
  it('should refresh the book', async(() => {
    component.books = [{
      id: 1,
      title: 'Le JS pour les nulls',
      author: {
        firstName: 'Toto',
        lastName: 'Titi'
      }
    }];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Titre: Le JS pour les nulls');
  }));
});
