import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { BooksComponent } from './books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { selectBookIsLoading, selectBooksList } from '../Store/Book';
import { booksListMock } from '../Store/Book/books.mocks';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  const testStore = jasmine.createSpyObj('Store', ['select']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksComponent, BrowserAnimationsModule],
      //providers: [provideMockStore(testStore)],
      providers: [
                 provideMockStore({
                   initialState: { isLoading: false, books: booksListMock },
                   selectors: [
                     { selector: selectBooksList, value: booksListMock },
                     { selector: selectBookIsLoading, value: false }
                   ],

                 }),
               ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data from initSubscriptions', async () => {
    component.initSubscriptions();
    fixture.detectChanges();
    await fixture.whenStable();
    
    component.books$.subscribe((result) => {
      expect(result).toEqual(booksListMock);
    });

    component.isLoading$.subscribe((result) => {
      expect(result).toEqual(false);
    })
  });

  it('should call onCreateBook', () => {
    const storeSpy = spyOn(component.store, 'dispatch').and.callThrough();
    component.onCreateBook("Book 3");
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });

  it('should call onUpdateBook', () => {
    const storeSpy = spyOn(component.store, 'dispatch').and.callThrough();
    component.onUpdateBook({id: 3, name: "Book 3"});
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });

  it('should call onDeleteBook', () => {
    const storeSpy = spyOn(component.store, 'dispatch').and.callThrough();
    component.onDeleteBook({id: 3, name: "Book 3"});
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });
});
