import { TestBed, inject } from '@angular/core/testing';
import { of } from 'rxjs';

import { AuthorService } from './author.service';
import { HttpClient } from '@angular/common/http';

describe('AuthorService', () => {
  const mockHttpClient = jasmine.createSpyObj('HttpClient', {
    get: of([
      {
        id: 1,
        firstName: 'TOTO',
        lastName: 'TUTU'
      }
    ])
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: mockHttpClient },
        AuthorService
      ]
    });
  });

  it('should be created', inject([AuthorService], (service: AuthorService) => {
    expect(service).toBeTruthy();
  }));
});
