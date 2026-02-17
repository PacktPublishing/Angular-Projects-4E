import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChapterTitleService {
  private readonly _title = signal<string>('Chapter 1: Angular AI Kick-Starter');
  readonly title = this._title;

  setTitle(newTitle: string): void {
    this._title.set(newTitle);
  }
}
