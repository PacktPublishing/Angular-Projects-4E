import { Component, inject, model, viewChild } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  NzDatePickerModule
} from 'ng-zorro-antd/date-picker';
import { FormsModule, NgForm } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Parking } from '../../parking';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-ticket',
  imports: [
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    FormsModule,
    NzButtonModule,
    NzModalModule
  ],
  templateUrl: './tickets.html',
  styleUrl: './tickets.scss'
})
export class Tickets {
  private parkingService = inject(Parking);
  private form = viewChild.required(NgForm);
  readonly plateNo = model('');
  readonly arrival = model(new Date());
  readonly location = model('');
  readonly isVisible = model(false);
  readonly prompt = model('');

  add() {
    this.parkingService.createTicket(
      this.plateNo(), this.arrival(), this.location()
    );
    this.form().reset();
  }

  async ok() {
    await this.parkingService.ask(this.prompt());
    this.prompt.set('');
  }
}
