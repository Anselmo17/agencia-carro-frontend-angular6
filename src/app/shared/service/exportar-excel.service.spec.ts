import { TestBed, inject } from '@angular/core/testing';

import { ExportarExcelService } from './exportar-excel.service';

describe('ExportarExcelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExportarExcelService]
    });
  });

  it('should be created', inject([ExportarExcelService], (service: ExportarExcelService) => {
    expect(service).toBeTruthy();
  }));
});
