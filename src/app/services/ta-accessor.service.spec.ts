import { TestBed } from '@angular/core/testing';

import { TaAccessorService } from './ta-accessor.service';

describe('TaAccessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaAccessorService = TestBed.get(TaAccessorService);
    expect(service).toBeTruthy();
  });
});
