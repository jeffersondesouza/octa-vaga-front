import { FileGeneratorService } from './file-generator.service';
import { TestBed, inject } from '@angular/core/testing';


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
