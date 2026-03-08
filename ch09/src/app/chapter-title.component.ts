import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'chapter-title',
  template: `
    <p-toolbar>
      <span>{{ chapterTitle() }}</span>
    </p-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ToolbarModule]
})
export class ChapterTitleComponent {
  chapterTitle = input<string>('');
}
