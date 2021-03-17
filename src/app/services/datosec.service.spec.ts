import { TestBed, inject } from '@angular/core/testing';

import { DatosecService } from './datosec.service';

describe('DatosecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosecService]
    });
  });

  it('should be created', inject([DatosecService], (service: DatosecService) => {
    expect(service).toBeTruthy();
  }));
});
