import { TestBed, inject } from '@angular/core/testing';

import { PaymentLibService } from './payment-lib.service';

describe('PaymentLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentLibService]
    });
  });

  it('should be created', inject([PaymentLibService], (service: PaymentLibService) => {
    expect(service).toBeTruthy();
  }));
});
