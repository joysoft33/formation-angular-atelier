import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Author } from '../models/author';

const BASE_URL = 'http://localhost:3000/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private http: HttpClient
  ) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(BASE_URL);
  }

  create(author: Author): Observable<Author> {
    return this.http.post<Author>(BASE_URL, author);
  }
}
