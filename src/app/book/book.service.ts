import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Book } from "./book";

const BASE_URL = "http://localhost:3000/books";

@Injectable({
  providedIn: "root"
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(BASE_URL);
  }
}
