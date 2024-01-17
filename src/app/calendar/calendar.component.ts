import { Component } from '@angular/core';
import { range, pull } from 'lodash';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatDialog, } from '@angular/material/dialog';
import { DialogEventFormComponent } from '../dialog-event-form/dialog-event-form.component';
import { Appointment } from '../custom-dataType/appointment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  dayLabels = [[0, 31, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31]];

  weeks = range(5); // [0...4]
  days = range(7); // [0...6]
  entryState: FormGroup[][][]; // The state of each calendar item
  monthYearDate: string = "default calandar"
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.entryState = this.dayLabels.map(week => week.map(() => []));
    this.setMonthAndYear(new Date(2024, 0, 1),undefined);
  }

  newEntry(day: number, week: number) {
    if (this.dayLabels[week][day] == 0)
      return;
    const dialogRef = this.dialog.open(DialogEventFormComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      const appointment: Appointment = {
        name: result.eventName,
        fromTime: result.fromTime,
        toTime: result.toTime,
        monthYearDate: this.monthYearDate
      }
      const randomIndex = Math.floor(Math.random() * 5);
      const colors = ['grey','red', 'blue', 'yellow', 'green'];
      console.log(randomIndex);
      this.entryState[week][day].push(
        this.fb.group({
          appointment: appointment,
          text: appointment.name + ' ' + appointment.fromTime + ' to ' + appointment.toTime,
          color: [colors[randomIndex]],
        })
      );
    });
  }

  deleteEntry(day: number, week: number, control: FormControl) {
    pull(this.entryState[week][day], control);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  private numDays(y, m) {
    return new Date(y, m, 0).getDate()
  }

  setMonthAndYear(monthAndYear: Date, datepicker: any) {
    let month = monthAndYear.getMonth() + 1;
    let year = monthAndYear.getFullYear();

    const localLabels = [];
    let weekArray = [];
    for (let i = 0; i < monthAndYear.getDay(); i++) {
      weekArray.push(0);
    }

    for (let i = 1; i <= this.numDays(year, month); i++) {
      weekArray.push(i);
      if (weekArray.length == 7) {
        localLabels.push(weekArray);
        weekArray = [];
      }
    }
    localLabels.push(weekArray);
    this.dayLabels = localLabels;
    this.entryState = this.dayLabels.map(week => week.map(() => []));
    if (datepicker) datepicker.close();
    this.monthYearDate = month + '/' + year;
  }


}
