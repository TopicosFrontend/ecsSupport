import { TestBed } from '@angular/core/testing';

import { ProviderSupportService } from './provider-support.service';

describe('ProviderSupportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProviderSupportService = TestBed.get(ProviderSupportService);
    expect(service).toBeTruthy();
  });
});
