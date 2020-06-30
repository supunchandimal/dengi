import { TestBed } from '@angular/core/testing';

import { TnfAlphacalculateService } from './tnf-alphacalculate.service';

describe('TnfAlphacalculateService', () => {
  let service: TnfAlphacalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TnfAlphacalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
