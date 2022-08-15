import { TestBed } from '@angular/core/testing';

import { AssetControllerService } from './asset-controller.service';

describe('AssetControllerService', () => {
  let service: AssetControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
