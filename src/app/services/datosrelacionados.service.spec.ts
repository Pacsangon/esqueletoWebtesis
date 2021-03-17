import { TestBed, inject } from '@angular/core/testing';

import { DatosrelacionadosService } from './datosrelacionados.service';

describe('DatosrelacionadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosrelacionadosService]
    });
  });

  it('should be created', inject([DatosrelacionadosService], (service: DatosrelacionadosService) => {
    expect(service).toBeTruthy();
  }));
});
