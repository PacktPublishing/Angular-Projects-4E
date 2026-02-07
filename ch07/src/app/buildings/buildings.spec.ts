import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buildings } from './buildings';

describe('Buildings', () => {
  let component: Buildings;
  let fixture: ComponentFixture<Buildings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buildings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buildings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
