import { TestBed, inject } from '@angular/core/testing';

import { FileGeneratorService } from './file-generator.service';

describe('FileGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileGeneratorService]
    });
  });

  it('should be created', inject([FileGeneratorService], (service: FileGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
