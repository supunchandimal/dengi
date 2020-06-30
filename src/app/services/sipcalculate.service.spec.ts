import { TestBed } from '@angular/core/testing';

import { SipcalculateService } from './sipcalculate.service';

describe('SipcalculateService', () => {
  let service: SipcalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SipcalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
