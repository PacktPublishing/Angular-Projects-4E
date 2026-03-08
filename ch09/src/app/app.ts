import { Component, inject, signal } from '@angular/core';
import { ChapterTitleComponent } from './chapter-title.component';
import { ChapterTitleService } from './chapter-title.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Menubar } from 'primeng/menubar';
import { ButtonDirective } from 'primeng/button';
import { Data } from './data';
import { Item } from './item';
import { OverlayBadge } from 'primeng/overlaybadge';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  imports: [
    ChapterTitleComponent,
    Menubar,
    ButtonDirective,
    OverlayBadge,
    Cart
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly chapterTitleService = inject(ChapterTitleService);
  protected readonly title = this.chapterTitleService.title;
  private data = inject(Data);
  readonly items = signal<Item[]>([]);
  readonly selectedItems = signal<Item[]>([]);
  readonly isCartVisible = signal(false);

  readonly categories = toSignal(
    this.data.getCategories().pipe(
      map(categories => categories.map(cat => {
        return {
          id: cat.id,
          label: cat.name,
          command: () => this.getItemsByCategory(cat.id)
        };
      }))
    )
  );

  constructor() {
    this.chapterTitleService.setTitle(
      'Chapter 9: Flash POS'
    );
  }

  addToCart(item: Item) {
    this.selectedItems.update(items => [...items, item]);
  }

  clear() {
    this.selectedItems.update(() => []);
    this.isCartVisible.set(false);
  }

  private getItemsByCategory(category: string) {
    this.data.getItems(category).subscribe(items => {
      this.items.set(items);
    });
  }
}
