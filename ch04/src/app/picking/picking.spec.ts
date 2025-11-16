import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Picking } from './picking';

describe('Picking', () => {
  let component: Picking;
  let fixture: ComponentFixture<Picking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Picking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Picking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
