import { TestBed } from '@angular/core/testing';

import { IlOnebetacalculateService } from './il-onebetacalculate.service';

describe('IlOnebetacalculateService', () => {
  let service: IlOnebetacalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IlOnebetacalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
