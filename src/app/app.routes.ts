import { Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';

export const routes: Routes = [
    { path: '', redirectTo: '/lifecycle', pathMatch: 'full' },
    {path: 'lifecycle', component: LifecycleComponent},
    { path: 'cd', component: ChangeDetectorComponent },
];
