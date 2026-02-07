import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Data } from '../data';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from "@angular/router";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-buildings',
  imports: [MatListModule, RouterLink, MatIcon],
  templateUrl: './buildings.html',
  styleUrl: './buildings.scss',
})
export class Buildings {
  private data = inject(Data);

  buildings = toSignal(this.data.getBuildings());
}
