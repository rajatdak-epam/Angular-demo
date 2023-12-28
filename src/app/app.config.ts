import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideEffects } from '@ngrx/effects';
import { BooksEffects } from './Store/Book/book.effects';
import { provideStore } from '@ngrx/store';
import { booksReducer } from './Store/Book/book.reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(), 
    provideStore({book: booksReducer}),
    provideEffects([BooksEffects]),
    provideStoreDevtools({
      maxAge: 5
    })
  ]
};
