import { TestBed, inject } from '@angular/core/testing';

import { DatostService } from './datost.service';

describe('DatostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatostService]
    });
  });

  it('should be created', inject([DatostService], (service: DatostService) => {
    expect(service).toBeTruthy();
  }));
});
