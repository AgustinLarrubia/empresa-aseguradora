import { TestBed } from '@angular/core/testing';

import { DatosSeguroService } from './datos-seguro.service';

describe('DatosSeguroService', () => {
  let service: DatosSeguroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosSeguroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
