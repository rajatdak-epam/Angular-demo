import { booksStateMock } from './books.mocks';
import * as fromBooks from './index';

describe('BooksSelectors', () => {
    it('should select book state', () => {
        expect(fromBooks.selectBookState.projector(booksStateMock)).toEqual(booksStateMock);
    });

    it('should select books list from state', () => {
        expect(fromBooks.selectBooksList.projector(booksStateMock)).toEqual(booksStateMock.books);
    });

    it('should select books list from state', () => {
        expect(fromBooks.selectBookIsLoading.projector(booksStateMock)).toEqual(booksStateMock.isLoading);
    });
});