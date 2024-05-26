import { TestBed } from '@angular/core/testing';

import { TransactionsServiceService } from './transactions-service.service';

describe('TransactionsServiceService', () => {
  let service: TransactionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
