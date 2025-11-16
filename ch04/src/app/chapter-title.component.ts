import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'chapter-title',
  template: `<h1>{{ chapterTitle() }}</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterTitleComponent {
  chapterTitle = input<string>('');
}
