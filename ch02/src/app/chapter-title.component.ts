import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ClrNavigationModule } from '@clr/angular';

@Component({
  selector: 'chapter-title',
  template: `
    <clr-header>
      <div class="branding">
        <a href="javascript://" class="nav-link">
          <span class="title">{{chapterTitle()}}</span>
        </a>
      </div>
    </clr-header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ClrNavigationModule]
})
export class ChapterTitleComponent {
  chapterTitle = input<string>('');
}
