import { TestBed } from '@angular/core/testing';

import { DisplayUserService } from './display-user.service';

describe('DisplayUserService', () => {
  let service: DisplayUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
