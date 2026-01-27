import { Component, model, signal, inject, computed } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { Data } from '../data';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-booking',
  imports: [
    StepperModule,
    FormsModule,
    InputTextModule,
    DatePickerModule,
    SelectButtonModule,
    SelectModule,
    ButtonModule,
    MessageModule
  ],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking {
  private data = inject(Data);
  readonly name = model('');
  readonly email = model('');
  readonly date = model('');
  readonly time = model('');
  readonly slots = signal([
    '12:00','13:00','14:00','15:00','16:00','17:00','18:00'
  ]);
  readonly room = signal<number | undefined>(undefined);
  readonly bookingDate = computed(() => {
    const d = new Date(this.date());
    const offset = d.getTime() - d.getTimezoneOffset() * 60000;
    const offdate = new Date(offset);
    const t = Number(this.time().substring(0, this.time().indexOf(':')));
    offdate.setHours(t);
    return offdate.toString();
  });
  readonly rooms = signal<number[]>([]);
  readonly msg = signal('');

  save() {
    this.data.create(
      this.name(),
      this.email(),
      this.bookingDate(), 
      this.room()!
    ).subscribe(result => this.msg.set(result.message));
  }

  getRooms() {
    this.data.getRooms(this.bookingDate()).subscribe(
      rooms => this.rooms.set(rooms)
    );
  }
}
