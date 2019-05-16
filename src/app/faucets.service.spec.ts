import { TestBed } from '@angular/core/testing';

import { FaucetsService } from './faucets.service';

describe('FaucetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaucetsService = TestBed.get(FaucetsService);
    expect(service).toBeTruthy();
  });
});
