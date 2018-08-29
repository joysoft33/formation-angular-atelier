import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() notification = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.bookService.get(+params.get('id'));
      })
    ).subscribe(book => this.book = book);
  }

  onClick() {
    this.notification.emit(`Vous avez cliqué sur ${this.book.title}`);
  }
}
