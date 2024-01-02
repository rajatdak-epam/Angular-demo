import { IBook } from './book.interface';
import { IBookState } from './book.model';

export const booksListMock: IBook[] = [
    {
        id: 1,
        name: 'Book 1'
    },
    {
        id: 2,
        name: 'Book 2'
    }
];

export const booksStateMock: IBookState = {
    books: booksListMock,
    isLoading: false
};