import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryComponent } from './entry/entry.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EventFormComponent } from './event-form/event-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DialogEventFormComponent } from './dialog-event-form/dialog-event-form.component';
import { MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { LazyloadedModule } from './event-detail/event-detail.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    CalendarComponent,
    DropdownComponent,
    EventFormComponent,
    DialogEventFormComponent,
  ],
  entryComponents: [DialogEventFormComponent],

  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    DragDropModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule,
    MatInputModule, FormsModule, MatButtonModule, MatDialogModule, MatMenuModule, MatDividerModule, MatIconModule,
    LazyloadedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
