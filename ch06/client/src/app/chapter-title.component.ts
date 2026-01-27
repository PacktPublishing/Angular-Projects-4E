import {
  ChangeDetectionStrategy,
  Component,
  input,
  inject
} from '@angular/core';
import { Data } from './data';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from "primeng/button";
import { PopoverModule } from 'primeng/popover';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'chapter-title',
  template: `
    <p-toolbar>
      <span>{{ chapterTitle() }}</span>
      <ng-template #end>
        <p-button
          label="AI Assistant"
          (click)="op.toggle($event)"
          size="small"/>
        <p-popover #op>
            <div class="content">
              <textarea rows="5" cols="30" pTextarea #prompt></textarea>
              <p-button label="Submit" (click)="submit(prompt.value)" />
            </div>
        </p-popover>
      </ng-template>
    </p-toolbar>
    <p-toast />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ToolbarModule, ButtonModule, PopoverModule, ToastModule],
  styles: `
    .content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: end;
    }
  `,
  providers: [MessageService]
})
export class ChapterTitleComponent {
  private data = inject(Data);
  private msgService = inject(MessageService);

  chapterTitle = input<string>('');

  submit(text: string) {
    this.data.ask(text).subscribe(result => this.msgService.add({
      summary: 'Studio BookMaster',
      detail: result.message
    }));
  }
}
