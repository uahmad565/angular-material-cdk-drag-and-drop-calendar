import { Component, Input, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../custom-dataType/appointment';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements AfterViewInit {
  @ViewChild('textArea') textArea: ElementRef<HTMLElement>;
  @Input() state: FormGroup;
  @Output() deleteMe = new EventEmitter<void>();
  @Input() isTextareaReadOnly: boolean = false;
  selected = true;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngAfterViewInit() {
    // Cannot change DOM bindings in the same tick as the
    // ngAfterViewInit is called, i.e. *ngIf="selected",
    // so use setTimeout to defer this until the next tick:
    setTimeout(() => this.setSelected(this.state.value.text === ''));
  }

  checkEnter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.setSelected(false);
    }
  }

  setSelected(val: boolean) {
    // debugger;
    this.selected = val;
    if (val) {
      // *ngIf="selected" causes the textArea to appear in
      // the DOM, so it is only available on the next tick:
      setTimeout(() => this.textArea.nativeElement.focus());
    } else if (this.state.value.text.trim() === '') {
      // Tell the parent component to delete the FormControl
      // for this entry:
      this.deleteMe.next();
    }
    console.log("textarea",this.state.value);
    // console.log("state",this.state.value.text);
  }

  deleteEntry(event) {
    event.stopPropagation();
    console.log("delete called");
    this.deleteMe.next();
  }

  navigateToTargetRoute(event) {
    const appointment = this.state.value.appointment as Appointment;    
    this.router.navigate(['/view-appointment',appointment], { relativeTo: this.route });
  }

}
