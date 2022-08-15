import { TestBed } from '@angular/core/testing';

import { CookiesSessionService } from './cookies-session.service';

describe('CookiesSessionService', () => {
  let service: CookiesSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookiesSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
