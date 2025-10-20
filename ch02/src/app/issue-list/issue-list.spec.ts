import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueList } from './issue-list';

describe('IssueList', () => {
  let component: IssueList;
  let fixture: ComponentFixture<IssueList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
