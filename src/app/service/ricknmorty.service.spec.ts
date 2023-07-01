import { TestBed } from '@angular/core/testing';

import { RicknmortyService } from './ricknmorty.service';

describe('RicknmortyService', () => {
  let service: RicknmortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RicknmortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
