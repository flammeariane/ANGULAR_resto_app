import { TestBed } from '@angular/core/testing';

import { QuickService } from './quick.service';

describe('QuickService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuickService = TestBed.get(QuickService);
    expect(service).toBeTruthy();
  });
});
