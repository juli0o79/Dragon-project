import { TestBed } from '@angular/core/testing';

import { DragonServiceService } from './dragon-service.service';

describe('DragonServiceService', () => {
  let service: DragonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
