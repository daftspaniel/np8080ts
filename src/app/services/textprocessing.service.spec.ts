import { TestBed, inject } from '@angular/core/testing';

import { TextprocessingService } from './textprocessing.service';

describe('TextprocessingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextprocessingService]
    });
  });

  it('should be created', inject([TextprocessingService], (service: TextprocessingService) => {
    expect(service).toBeTruthy();
  }));
});
