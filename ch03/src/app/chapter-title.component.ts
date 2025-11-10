import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'chapter-title',
  template: `
    <mat-toolbar>
      <span>{{ chapterTitle() }}</span>
    </mat-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatToolbar]
})
export class ChapterTitleComponent {
  chapterTitle = input<string>('');
}
