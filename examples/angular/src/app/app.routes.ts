import { Routes } from '@angular/router';

import { ParentComponent } from './parent/parent.component'
import { TraceComponent } from './trace/trace.component';

export const routes: Routes = [
    { path: 'trace', component: TraceComponent },
    { path: '', component: ParentComponent }
];
