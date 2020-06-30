import { TestBed } from '@angular/core/testing';

import { PafcalculateService } from './pafcalculate.service';

describe('PafcalculateService', () => {
  let service: PafcalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PafcalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
