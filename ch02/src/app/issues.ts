import { Injectable, signal } from '@angular/core';
import { Issue } from './issue';
import { issueData } from '../../public/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class Issues {
  readonly issues = signal<Issue[]>(issueData);

  create(issue: Issue) {
    this.issues.update(issues => {
      issue.issueNo = this.issues().length + 1;
      return [...issues, issue];
    });
  }

  resolve(no: number) {
    const i = this.issues().findIndex(i => i.issueNo === no);
    this.issues.update(issues => {
      issues[i].completed = true;
      return [...issues];
    });
  }
}
