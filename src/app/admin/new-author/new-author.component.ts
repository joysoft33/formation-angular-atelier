import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthorService } from '../author.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.scss']
})
export class NewAuthorComponent implements OnInit {

  authorForm: FormGroup;
  message: string;

  constructor(
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authorForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    });
  }

  onSave() {
    const form = this.authorForm.value;
    this.authorService.create({
      firstName: form.firstName,
      lastName: form.lastName
    }).subscribe(
      author => {
        this.router.navigate(['/admin']);
      },
      error => {
        this.message = error;
      }
    );
  }

}
