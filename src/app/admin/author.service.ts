import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Author } from '../models/author';

const BASE_URL = 'http://localhost:3000/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private http: HttpClient
  ) { }

  getAuthors() {
    return this.http.get<Author>(BASE_URL);
  }

  create(author: Author) {
    return this.http.post<Author>(BASE_URL, author);
  }
}
