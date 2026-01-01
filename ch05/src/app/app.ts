import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NzLayoutModule,
    NzMenuModule,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
