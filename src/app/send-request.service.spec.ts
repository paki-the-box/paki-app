import { TestBed } from '@angular/core/testing';

import { SendRequestService } from './send-request.service';

describe('SendRequestService', () => {
  let service: SendRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
