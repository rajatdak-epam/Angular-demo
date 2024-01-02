import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { of, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { BookService } from '../../Services/book.service';
import { BooksEffects } from './book.effects';
import { booksListMock } from './books.mocks';
import * as fromBooks from './index';
import { IBook } from './book.interface';

describe('BooksEffects', () => {
    let effect: BooksEffects;
    let action$: ReplaySubject<Action>;
    let bookService: BookService;

    const mockReportService = {
        getBooks: () => of(booksListMock),
        create: () => of({id: 3, name: 'Book 3'}),
        update: () => of({id: 3, name: 'Book 3'}),
        delete: () => of({id: 3, name: 'Book 3'})
      }

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            providers: [
                BooksEffects,
                provideMockActions(() => action$),
                provideMockStore({
                    initialState: {
                        books: null
                    }
                }),
                {
                    provide: BookService,
                    useValue: mockReportService
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        effect = TestBed.inject(BooksEffects);
        bookService = TestBed.inject(BookService);
        action$ = new ReplaySubject();
    }));

    it('should be created', () => {
        expect(effect).toBeTruthy();
    });

    it('should get books', async () => {
        action$.next(fromBooks.getBooks());

        const result = await new Promise((resolve) => effect.getBooks$.pipe(take(1)).subscribe(resolve));
        
        expect(result).toEqual(
            fromBooks.getBooksSuccess({
                books: booksListMock
            })
        );
    });

    it('should create Book', async () => {
        const book: IBook = { id: 3, name: "Book 3" };
        action$.next(fromBooks.createBook({book}));

        const result = await new Promise((resolve) => effect.createBook$.pipe(take(1)).subscribe(resolve));
        
        expect(result).toEqual(
            fromBooks.createBookSuccess({
                book
            })
        );
    });

    it('should UPDATE Book', async () => {
        const book: IBook = { id: 3, name: "Book 3" };
        action$.next(fromBooks.updateBook({book}));

        const result = await new Promise((resolve) => effect.updateBook$.pipe(take(1)).subscribe(resolve));
        
        expect(result).toEqual(
            fromBooks.updateBookSuccess({
                book
            })
        );
    });

    it('should Delete Book', async () => {
        const book: IBook = { id: 3, name: "Book 3" };
        action$.next(fromBooks.deleteBook({book}));

        const result = await new Promise((resolve) => effect.deleteBook$.pipe(take(1)).subscribe(resolve));
        
        expect(result).toEqual(
            fromBooks.deleteBookSuccess({
                book
            })
        );
    });
});