import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ClrButtonModule, ClrFormsModule } from '@clr/angular';
import { Issues } from '../issues';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-reporter',
  imports: [ReactiveFormsModule, ClrFormsModule, ClrButtonModule],
  templateUrl: './issue-reporter.html',
  styleUrl: './issue-reporter.scss',
})
export class IssueReporter {
  private issuesService = inject(Issues);

  form!: FormGroup<{
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    priority: FormControl<string | null>;
    type: FormControl<string | null>;
  }>;

  constructor() {
    this.buildForm();
  }

  create() {
    if (!this.form.valid) {
      return;
    }
    this.issuesService.create(this.form.value as Issue);
    this.form.reset();
    this.buildForm();
  }

  private buildForm() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      priority: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
  }
}
