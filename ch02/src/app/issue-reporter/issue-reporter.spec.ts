import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueReporter } from './issue-reporter';

describe('IssueReporter', () => {
  let component: IssueReporter;
  let fixture: ComponentFixture<IssueReporter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueReporter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueReporter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
