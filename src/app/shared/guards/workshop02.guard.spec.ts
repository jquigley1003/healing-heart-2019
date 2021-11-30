import { TestBed } from '@angular/core/testing';

import { Workshop02Guard } from './workshop02.guard';

describe('Workshop02Guard', () => {
  let guard: Workshop02Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Workshop02Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
