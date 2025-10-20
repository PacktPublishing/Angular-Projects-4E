import { Component, computed, inject, signal } from '@angular/core';
import { Issues } from '../issues';
import { ClrDatagridModule } from '@clr/angular';
import { Confirm } from '../confirm/confirm';

@Component({
  selector: 'app-issue-list',
  imports: [ClrDatagridModule, Confirm],
  templateUrl: './issue-list.html',
  styleUrl: './issue-list.scss'
})
export class IssueList {
  private issuesService = inject(Issues);

  protected readonly issues = computed(() => {
    const data = this.issuesService.issues();
    return data.filter(i => !i.completed);
  });
  readonly selected = signal<number | undefined>(undefined);

  complete(confirmed: boolean) {
    if(confirmed) {
      this.issuesService.resolve(this.selected()!);
    }
    this.selected.set(undefined);
  }
}
