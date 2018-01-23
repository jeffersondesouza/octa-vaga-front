import { TestBed, inject } from '@angular/core/testing';

import { HtmlGeneratorService } from './html-generator.service';

describe('HtmlGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlGeneratorService]
    });
  });

  it('should be created', inject([HtmlGeneratorService], (service: HtmlGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
