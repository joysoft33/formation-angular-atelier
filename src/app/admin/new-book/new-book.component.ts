import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../../models/book';
import { BookService } from '../../book/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  book: Book = new Book();
  message: string;

  constructor(
    private bookService: BookService,
    private router: Router) {
  }

  ngOnInit() {
  }

  onSave() {
    console.log(this.book);
    this.bookService.create(this.book).subscribe(
      book => {
        this.router.navigate(['/admin']);
      },
      error => {
        this.message = error;
      }
    );
  }
}
