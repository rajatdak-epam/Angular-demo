
import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../Store/Book/book.interface';
import { select, Store } from '@ngrx/store';
import * as fromBooks from '../Store/Book/index';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatInputModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit {
    books$: Observable<IBook[]>;
    isLoading$: Observable<boolean>;
    displayedColumns: string[] = ['Id', 'Name', 'Action'];
    dataSource: MatTableDataSource<IBook[]>;

    constructor(private readonly store: Store) {
    }

    ngOnInit(): void {
        this.initDispatch();
        this.initSubscriptions();
    }

    onCreateBook(name: string): void {
        this.store.dispatch(fromBooks.createBook({
            book: {
                id: Math.floor(Math.random()*100),
                name
            }
        }));
    }

    onUpdateBook(book: IBook): void {
        this.store.dispatch(fromBooks.updateBook({book}));
    }

    onDeleteBook(book: IBook): void {
        this.store.dispatch(fromBooks.deleteBook({book}));
    }

    private initDispatch(): void {
        this.store.dispatch(fromBooks.getBooks());
    }

    private initSubscriptions(): void {
        this.books$ = this.store.pipe(select(fromBooks.selectBooksList));
        this.isLoading$ = this.store.pipe(select(fromBooks.selectBookIsLoading));
    }
}
