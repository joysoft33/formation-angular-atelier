import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { BookService } from '../../book/book.service';
import { AuthorService } from '../author.service';
import { Author } from '../../models/author';
import { Book } from '../../models/book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  authors$: Observable<Author[]>;
  book: Book = new Book();
  authorId: number;
  message: string;

  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
    private router: Router) {
  }

  ngOnInit() {
    this.authors$ = this.authorService.getAuthors();
  }

  onSave() {
    this.authors$.subscribe(authors => {
      const { firstName, lastName } = authors.find(author => author.id === this.authorId);
      this.book.author = { id: undefined, firstName, lastName };
      this.bookService.create(this.book).subscribe(
        book => {
          this.router.navigate(['/admin']);
        },
        error => {
          this.message = error;
        }
      );
    });
  }
}
