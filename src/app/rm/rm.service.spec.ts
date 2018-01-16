import { TestBed, inject } from '@angular/core/testing';

import { RmService } from './rm.service';

describe('RmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RmService]
    });
  });

  it('should be created', inject([RmService], (service: RmService) => {
    expect(service).toBeTruthy();
  }));
});
