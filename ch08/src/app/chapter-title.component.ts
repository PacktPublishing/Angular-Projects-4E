import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  KENDO_APPBAR
} from '@progress/kendo-angular-navigation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'chapter-title',
  template: `
    <kendo-appbar>
      <kendo-appbar-section>
        <h1 class="title">{{ chapterTitle() }}</h1>
      </kendo-appbar-section>
      <kendo-appbar-section>
        <ul>
          <li>
            <a routerLink="employees">Employees</a>
          </li>
          <li>
            <a routerLink="shifts">Shifts</a>
          </li>
        </ul>
      </kendo-appbar-section>
    </kendo-appbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KENDO_APPBAR, RouterLink],
  styles: `
    ul {
      list-style-type: none;
    }

    a {
      font-size: 1rem;
      text-decoration: none;
      color: navy;

      &:hover {
        color: gray;
      }
    }

    li {
      display: inline-block;
      margin: 0.5rem;
      
    }
  `
})
export class ChapterTitleComponent {
  chapterTitle = input<string>('');
}
