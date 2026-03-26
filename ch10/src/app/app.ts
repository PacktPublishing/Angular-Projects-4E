import { Component, signal } from '@angular/core';
import {
  BUTTONS,
  DEFAULT_LIBRARY_BUTTONS,
  NgxWigModule
} from 'ngx-wig';
import { save } from './save-button';
import { brief } from './brief-button';
import { load } from './load-button';

@Component({
  selector: 'app-root',
  imports: [NgxWigModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [
    {
      provide: BUTTONS,
      multi: true,
      useValue: {
        ...DEFAULT_LIBRARY_BUTTONS,
        save,
        brief,
        load
      }
    }
  ]
})
export class App {
  protected readonly title = signal('ainotes');
}
