import { Component, OnInit,Inject } from '@angular/core';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { AbstractControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-event-form',
  templateUrl: './dialog-event-form.component.html',
  styleUrls: ['./dialog-event-form.component.css']
})
export class DialogEventFormComponent implements OnInit {

  timeForm: FormGroup;
  events: string[] = [];

  ngOnInit(): void {
    this.timeForm = this.fb.group(
      {
        eventName: ['', Validators.required],
        fromTime: ['', Validators.required],
        toTime: ['', Validators.required],
      },
      { validator: this.timeRangeValidator }
    );
  }

  addEvent(type: string, event) {
    this.events.push(`${type}: ${event.value}`);
  }

  timeRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const fromTime = control.get('fromTime').value;
    const toTime = control.get('toTime').value;
    const eventName = control.get('eventName').value;

    if (fromTime && toTime && fromTime >= toTime) {
      return { invalidRange: true };
    }

    if (!eventName) {
      return { invalidEventName: true };
    }
    return null;
  }

  constructor(
    public dialogRef: MatDialogRef<DialogEventFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder, public dialog: MatDialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close("asdjaskjd");
  }
}

export interface DialogData {
  animal: string;
  name: string;
}