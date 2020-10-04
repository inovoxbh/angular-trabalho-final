import { TestBed } from '@angular/core/testing';

import { FormulaoneApiService } from './formulaone-api.service';

describe('FormulaoneApiService', () => {
  let service: FormulaoneApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaoneApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
