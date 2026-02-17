import {
  Component,
  inject,
  signal,
  viewChild
} from '@angular/core';
import { Employees } from '../employees';
import {
  CreateFormGroupArgs,
  EventStyleArgs,
  KENDO_SCHEDULER,
  SchedulerComponent
} from '@progress/kendo-angular-scheduler';
import {
  KENDO_DRAGANDDROP,
  DropTargetEvent
} from '@progress/kendo-angular-utils';
import {
  KENDO_LAYOUT
} from '@progress/kendo-angular-layout';
import { Day } from '@progress/kendo-date-math';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  KENDO_LISTVIEW
} from '@progress/kendo-angular-listview';

@Component({
  selector: 'app-shifts',
  imports: [
    KENDO_SCHEDULER,
    ReactiveFormsModule,
    KENDO_LISTVIEW,
    KENDO_LAYOUT,
    KENDO_DRAGANDDROP
  ],
  templateUrl: './shifts.html',
  styleUrl: './shifts.scss',
})
export class Shifts {
  private scheduler = viewChild(SchedulerComponent);
  hiddenDays = [Day.Saturday, Day.Sunday];
  shifts = [];
  form!: FormGroup;
  employees = signal(inject(Employees).getAll());
  resources = [
    {
      name: 'Employee',
      field: 'employee',
      valueField: 'name',
      textField: 'name',
      data: this.employees()
    }
  ];
  selected = signal('');

  constructor() {
    this.createShift = this.createShift.bind(this);
  }

  createShift(args: CreateFormGroupArgs) {
    const dataItem = args.dataItem;
    this.buildForm(dataItem.start, dataItem.end, '');
    return this.form;
  }

  addShift(evt: DropTargetEvent) {
    const start = new Date(
      evt.dropTarget.getAttribute('date')!
    );
    const end = new Date(start.getTime() + 30 * 60000);
    this.buildForm(start, end, this.selected());
    this.scheduler()?.addEvent(this.form);
  }

  getEventStyles = (args: EventStyleArgs) => {
    const name = args.event.dataItem.employee;
    return {
      background: this.employees().find(employee => employee.name === name)?.color
    };
  }
  
  private buildForm(start: Date, end: Date, name: string) {
    this.form = new FormGroup({
      title: new FormControl(name),
      start: new FormControl(start),
      end: new FormControl(end),
      employee: new FormControl(name)
    });
  }
}
