import { createBook } from './../Store/Book/book.actions';

import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService]
    });

    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send request to GET the books', async () => {

    service.getBooks()
    expect(service.booksList.length).toEqual(2);
  });

  it('should send request to CREATE the books', async () => {

    service.create({ id: 3, name: "Book3" })
    expect(service.booksList.length).toEqual(3);
  });

  it('should send request to UPDATE the books', async () => {

    service.update({
      id: 1,
      name: 'Book 1'
    })

    expect(service.booksList.length).toEqual(2);
  });

  it('should send request to UPDATE the books with matching ID', async () => {
    service.create({ id: 3, name: "Book3" })
    service.update({
      id: 3,
      name: 'Book 3'
    })

    expect(service.booksList.length).toEqual(3);
  });

  it('should send request to DELETE the books', async () => {

    service.delete({
      id: 1,
      name: 'Book 1'
    })
    expect(service.booksList.length).toEqual(2);
  });
});
