import { TestBed, inject } from '@angular/core/testing';

import { ShowEditElementMenuStatusService } from './show-edit-element-menu-status.service';

describe('ShowEditElementMenuStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowEditElementMenuStatusService]
    });
  });

  it('should be created', inject([ShowEditElementMenuStatusService], (service: ShowEditElementMenuStatusService) => {
    expect(service).toBeTruthy();
  }));
});
