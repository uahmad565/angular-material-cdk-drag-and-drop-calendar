import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEventFormComponent } from './dialog-event-form.component';

describe('DialogEventFormComponent', () => {
  let component: DialogEventFormComponent;
  let fixture: ComponentFixture<DialogEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
