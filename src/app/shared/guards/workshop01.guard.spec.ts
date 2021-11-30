import { TestBed } from '@angular/core/testing';

import { Workshop01Guard } from './workshop01.guard';

describe('Workshop01Guard', () => {
  let guard: Workshop01Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Workshop01Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
