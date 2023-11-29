import { Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

export const routes: Routes = [
    //{ path: '', redirectTo: '/lifecycle', pathMatch: 'full' },
    {path: 'lifecycle', component: LifecycleComponent},
];
