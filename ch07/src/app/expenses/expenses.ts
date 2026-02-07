import {
  Component,
  inject,
  signal,
  linkedSignal,
  computed
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  toSignal,
  takeUntilDestroyed
} from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatDatepickerModule
} from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import {
  MatExpansionModule
} from '@angular/material/expansion';
import { Data } from '../data';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-expenses',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInput,
    MatExpansionModule,
    ReactiveFormsModule,
    CurrencyPipe,
    FormsModule
  ],
  templateUrl: './expenses.html',
  styleUrl: './expenses.scss'
})
export class Expenses {
  private route = inject(ActivatedRoute);
  private data = inject(Data);

  params = toSignal(this.route.paramMap);
  building = toSignal(
    this.data.getBuilding(this.params()?.get('id')!)
  );
  form = new FormGroup({
    electricity: new FormControl(0),
    water: new FormControl(0),
    cleaning: new FormControl(0),
    elevator: new FormControl(0),
    heating: new FormControl(0)
  });
  readonly total = signal(0);
  readonly aExpenses = linkedSignal(() => {
    return Array.from(
      { length: this.building()?.apartments! },
      () => 0
    )
  });
  readonly aTotal = computed(() => {
    return this.aExpenses().reduce((x, y) => x + y, 0);
  });

  constructor() {
    this.form.valueChanges.pipe(takeUntilDestroyed())
      .subscribe(values => {
        const amount = Object.values(values).flatMap(v => {
          return Number(v);
        });
        this.total.set(amount.reduce((x, y) => x + y, 0));
      }
    )
  }

  updateExpense(apartment: number, amount: string) {
    this.aExpenses.update(expenses => {
      expenses[apartment] = Number(amount);
      return [...expenses];
    });
  }
}
