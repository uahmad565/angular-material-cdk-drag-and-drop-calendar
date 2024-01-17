import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { EventDetailModule } from './event-detail-routing.module';
import { EventDetailComponent } from './event-detail.component';
 
 
@NgModule({
  declarations: [EventDetailComponent],
  imports: [
    CommonModule,
    EventDetailModule
  ]
})
export class LazyloadedModule { }