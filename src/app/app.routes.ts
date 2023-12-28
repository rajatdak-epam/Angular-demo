import { Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
    { path: '', redirectTo: '/lifecycle', pathMatch: 'full' },
    {path: 'lifecycle', component: LifecycleComponent},
    { path: 'cd', component: ChangeDetectorComponent },
    { path: 'pipes', component: PipeExampleComponent },
    { path: 'ngrx', component: BooksComponent },
];
