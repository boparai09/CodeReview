import { TestBed, inject } from '@angular/core/testing';

import { AuthorsService } from './authors.service';

describe('AuthorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorsService]
    });
  });

  it('should be created', inject([AuthorsService], (service: AuthorsService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to fetch Authors', inject([AuthorsService], (service: AuthorsService) => {
    service.get().subscribe(data => {
      expect(data.length).toBe(5);
    })
  }));
});
