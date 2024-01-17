import { Component, OnInit, } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { MatDialog, } from '@angular/material/dialog';

import { DialogEventFormComponent } from '../dialog-event-form/dialog-event-form.component';

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {

  animal: string;
  name: string;


  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  addEvent(type: string, event) {

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEventFormComponent, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed',result);
      this.animal = result;
    });
  }
}
