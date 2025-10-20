import { Component, inject } from '@angular/core';
import { ChapterTitleComponent } from './chapter-title.component';
import { ChapterTitleService } from './chapter-title.service';
import { ClrLayoutModule } from '@clr/angular';
import { IssueList } from './issue-list/issue-list';
import { IssueReporter } from './issue-reporter/issue-reporter';

@Component({
  selector: 'app-root',
  imports: [
    ChapterTitleComponent,
    ClrLayoutModule,
    IssueList,
    IssueReporter
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly chapterTitleService = inject(ChapterTitleService);
  protected readonly title = this.chapterTitleService.title;
  // To set the title, use: this.chapterTitleService.setTitle('new-title');

  constructor() {
    this.chapterTitleService.setTitle(
      'Chapter 2: IssueTracker Lite'
    );
  }
}
