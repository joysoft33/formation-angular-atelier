import { Author } from './author';

export class Book {
  id: number;
  title: string;
  author: Author;

  constructor() {
    this.author = new Author();
  }
}
