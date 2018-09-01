import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from './book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  message: string;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }

  onNotification(message: string) {
    this.message = message;
  }
}
