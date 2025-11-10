import { Component, inject } from '@angular/core';
import { ChapterTitleComponent } from './chapter-title.component';
import { ChapterTitleService } from './chapter-title.service';
import { TableList } from './table-list/table-list';

@Component({
  selector: 'app-root',
  imports: [ChapterTitleComponent, TableList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly chapterTitleService = inject(ChapterTitleService);
  protected readonly title = this.chapterTitleService.title;
  // To set the title, use: this.chapterTitleService.setTitle('new-title');
  constructor() {
    this.chapterTitleService.setTitle(
      'Chapter 3: EasyMenu'
    );
  }
}
