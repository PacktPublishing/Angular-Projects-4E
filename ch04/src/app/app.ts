import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChapterTitleComponent } from './chapter-title.component';
import { ChapterTitleService } from './chapter-title.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChapterTitleComponent, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly chapterTitleService = inject(ChapterTitleService);
  protected readonly title = this.chapterTitleService.title;
  // To set the title, use: this.chapterTitleService.setTitle('new-title');

  constructor() {
    this.chapterTitleService.setTitle(
      'Chapter 4: SmartFactory Picker'
    );
  }
}
