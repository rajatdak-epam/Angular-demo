import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortedImpurePipe } from '../Pipes/sorted-impure.pipe';
import { MatButtonModule } from '@angular/material/button';
import { ReversePurePipe } from '../Pipes/reverse-pure.pipe';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IBook } from '../Store/Book/book.interface';
import { Store, select } from '@ngrx/store';
import * as fromBooks from '../Store/Book/index';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [CommonModule, SortedImpurePipe, MatButtonModule, ReversePurePipe],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.scss'
})
export class PipeExampleComponent implements OnInit, OnDestroy {
  numbers = [this.randomNumber(), this.randomNumber(), this.randomNumber()];
  name: string = "Rajat";
  books$: Observable<IBook[]>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public readonly store: Store) {

  }

  ngOnInit(): void {
    // for verifying NGRX data from book component
    this.getDataThroughNGRX();
  }
  
  generateNumber() {
    this.numbers.push(this.randomNumber());
  }

  randomNumber() {
    return Math.floor(100 * Math.random()) + 1;
  }

  getDataThroughNGRX(): void {
    this.books$ = this.store.pipe(select(fromBooks.selectBooksList));
    console.log('this.books$ :', this.books$);

    this.books$.pipe(takeUntil(this.destroy$)).subscribe(s => console.log("Book List", s));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
