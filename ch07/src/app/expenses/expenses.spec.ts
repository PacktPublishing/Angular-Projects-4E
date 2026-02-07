import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expenses } from './expenses';

describe('Expenses', () => {
  let component: Expenses;
  let fixture: ComponentFixture<Expenses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expenses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expenses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
