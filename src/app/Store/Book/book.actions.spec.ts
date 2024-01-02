import { booksListMock } from './books.mocks';
import * as fromBooks from './index';

describe('BooksActions', () => {

    it('GetBooks : should create an action to get books', () => {
        const expectedAction = {
            type: fromBooks.getBooks.type
        };
        const action = fromBooks.getBooks();
        expect(action).toEqual(expectedAction);
    });



    it('GetBooksSuccess should create an action to get books success', () => {
        const expectedAction = {
            type: fromBooks.getBooksSuccess.type,
            books: booksListMock
        };
        const action = fromBooks.getBooksSuccess({
            books: booksListMock
        });
        expect(action).toEqual(expectedAction);
    });

});