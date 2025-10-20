import { TestBed } from '@angular/core/testing';

import { Issues } from './issues';

describe('Issues', () => {
  let service: Issues;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Issues);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
