import { TestBed, inject } from '@angular/core/testing';

import { DataWrapperService } from './data-wrapper.service';

describe('DataWrapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataWrapperService]
    });
  });

  it('should be created', inject([DataWrapperService], (service: DataWrapperService) => {
    expect(service).toBeTruthy();
  }));
});
