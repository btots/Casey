import { TestBed, inject } from '@angular/core/testing';

import { BlogmanagerService } from './blogmanager.service';

describe('BlogmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogmanagerService]
    });
  });

  it('should be created', inject([BlogmanagerService], (service: BlogmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
