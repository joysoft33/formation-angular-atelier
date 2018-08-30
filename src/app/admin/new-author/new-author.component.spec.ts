import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { NewAuthorComponent } from './new-author.component';
import { AuthorService } from '../author.service';

describe('NewAuthorComponent', () => {
  let component: NewAuthorComponent;
  let fixture: ComponentFixture<NewAuthorComponent>;

  const mockAuthorService = jasmine.createSpyObj('AuthorService', {
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
      declarations: [NewAuthorComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        { provide: AuthorService, useValue: mockAuthorService },
        { provide: Router, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
