import { booksListMock } from './books.mocks';
import { IBookState } from './book.model';
import { booksReducer, initialBooksState } from './book.reducers';
import * as fromBooks from './index';
import { IBook } from './book.interface';

describe('BooksReducers', () => {
    let initialState: IBookState;
    const book: IBook = { id: 3, name: "Book 3" };

    beforeEach(() => {
        initialState = { ...initialBooksState };
    });

    it('should change state when getBooks', () => {
        const result = booksReducer(initialState, fromBooks.getBooks());

        expect(result).toEqual({
            isLoading: true,
            books: []
        });
    });

    it('should change state when getBooksSuccess', () => {
        const result = booksReducer(
            initialState,
            fromBooks.getBooksSuccess({
                books: booksListMock
            })
        );
        expect(result).toEqual({
            isLoading: false,
            books: booksListMock
        });
    });

    it('should change state when createBook', () => {
        const result = booksReducer(initialState, fromBooks.createBook({ book }));

        expect(result).toEqual({
            isLoading: true,
            books: []
        });
    });

    it('should change state when createBookSuccess', () => {
        const result = booksReducer(
            initialState,
            fromBooks.createBookSuccess({
                book
            })
        );
        expect(result).toEqual({
            isLoading: false,
            books: [book]
        });
    });

    it('should change state when updateBook', () => {
        const result = booksReducer(initialState, fromBooks.updateBook({ book }));

        expect(result).toEqual({
            isLoading: true,
            books: []
        });
    });

    it('should change state when updateBookSuccess', () => {
        initialState = {
            books: [book],
            isLoading: false
        };
        const result = booksReducer(
            initialState,
            fromBooks.updateBookSuccess({
                book
            })
        );
        expect(result).toEqual({
            isLoading: false,
            books: [book]
        });
    });

    it('should change state when deleteBook', () => {
        const result = booksReducer(initialState, fromBooks.deleteBook({ book }));

        expect(result).toEqual({
            isLoading: true,
            books: []
        });
    });

    it('should change state when deleteBookSuccess', () => {
        initialState = {
            books: [book],
            isLoading: false
        };
        const result = booksReducer(
            initialState,
            fromBooks.deleteBookSuccess({
                book
            })
        );
        expect(result).toEqual({
            isLoading: false,
            books: []
        });
    });
});