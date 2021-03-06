import { TestBed } from '@angular/core/testing';

import { IdleDataService } from './idle-data.service';

describe('IdleDataService', () => {
  let service: IdleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
