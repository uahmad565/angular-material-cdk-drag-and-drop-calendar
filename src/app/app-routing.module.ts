import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { EventDetailComponent } from './event-detail/event-detail.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'cal',
        pathMatch: 'full'
      },
    {
        path: 'cal',
        component: CalendarComponent
    },
    {
        path: 'view-appointment',
        loadChildren: () => import('./event-detail/event-detail.module')
            .then(mod => mod.LazyloadedModule)
    }, 

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }