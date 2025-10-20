import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirm } from './confirm';

describe('Confirm', () => {
  let component: Confirm;
  let fixture: ComponentFixture<Confirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confirm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Confirm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
