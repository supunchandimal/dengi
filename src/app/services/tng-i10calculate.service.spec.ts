import { TestBed } from '@angular/core/testing';

import { TngI10calculateService } from './tng-i10calculate.service';

describe('TngI10calculateService', () => {
  let service: TngI10calculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TngI10calculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
