import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExampleComponent } from './pipe-example.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectBookIsLoading, selectBooksList } from '../Store/Book';
import { booksListMock } from '../Store/Book/books.mocks';
import { of } from 'rxjs';

describe('PipeExampleComponent', () => {
  let component: PipeExampleComponent;
  let fixture: ComponentFixture<PipeExampleComponent>;

  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeExampleComponent],
      providers: [provideMockStore({
        initialState: { isLoading: false, books: booksListMock },
        selectors: [
          { selector: selectBooksList, value: booksListMock },
          { selector: selectBookIsLoading, value: false }
        ],

      }),],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call generateNumber', () => { 
    component.generateNumber();
    fixture.detectChanges();
    expect(component.numbers.length).toEqual(4);
  });

  it('should get data from getDataThroughNGRX', async () => {
    component.getDataThroughNGRX();
    fixture.detectChanges();
    await fixture.whenStable();

    component.books$.subscribe((result) => {
      expect(result).toEqual(booksListMock);
    })
  });

  
});
