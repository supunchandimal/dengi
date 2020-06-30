import { TestBed } from '@angular/core/testing';

import { Il10calculateService } from './il-10calculate.service';

describe('Il10calculateService', () => {
  let service: Il10calculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Il10calculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
