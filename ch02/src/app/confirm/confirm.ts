import { Component, input, output } from '@angular/core';
import { ClrModalModule } from '@clr/angular';

@Component({
  selector: 'app-confirm',
  imports: [ClrModalModule],
  templateUrl: './confirm.html',
  styleUrl: './confirm.scss',
})
export class Confirm {
  readonly issueNo = input<number>();
  readonly confirmed = output<boolean>();
}
