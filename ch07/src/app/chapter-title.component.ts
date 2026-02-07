import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'chapter-title',
  template: `
    <mat-toolbar>
      <span>{{ chapterTitle() }}</span>
      <a matIconButton matTooltip="Buildings" routerLink="buildings">
        <mat-icon>apartment</mat-icon>
      </a>
    </mat-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatToolbar, MatIconButton, MatIcon, MatTooltip, RouterLink],
  styles: 'span { flex: 1 1 auto; }'
})
export class ChapterTitleComponent {
  chapterTitle = input<string>('');
}
