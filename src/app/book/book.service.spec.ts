import { TestBed, inject } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

import { BookService } from "./book.service";

describe("BookService", () => {
  const mockHttpClient = jasmine.createSpyObj("HttpClient", {
    get: of([
      {
        id: 1,
        title: "TOTO",
        author: {
          firstName: "",
          lastName: ""
        }
      }
    ])
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: mockHttpClient },
        BookService
      ]
    });
  });

  it("should be created", inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

  it("should return at least one book", inject(
    [BookService],
    (service: BookService) => {
      service.getBooks().subscribe(books => {
        expect(books.length === 1).toBeTruthy();
      });
    }
  ));
});
