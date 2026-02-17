import {
  Component,
  model,
  computed,
  inject
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  KENDO_INPUTS
} from '@progress/kendo-angular-inputs';
import { KENDO_LABEL } from '@progress/kendo-angular-label';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import {
  KENDO_BUTTONS
} from '@progress/kendo-angular-buttons';
import { Employees } from '../employees';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-builder',
  imports: [
    FormsModule,
    KENDO_INPUTS,
    KENDO_LABEL,
    KENDO_DROPDOWNS,
    KENDO_BUTTONS,
  ],
  templateUrl: './employee-builder.html',
  styleUrl: './employee-builder.scss',
})
export class EmployeeBuilder {
  private employeesService = inject(Employees);
  readonly name = model('');
  readonly age = model<number | undefined>(undefined);
  readonly job = model('');
  readonly color = model('');
  readonly employee = computed<Employee>(() => {
    return {
      name: this.name(),
      age: this.age()!,
      job: this.job(),
      color: this.color()
    };
  });

  save() {
    this.employeesService.create(this.employee());
  }
}
