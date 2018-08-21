import { TestBed, inject } from '@angular/core/testing';

import { PaymentLibCustomerAService } from './payment-lib-customer-a.service';

describe('PaymentLibCustomerAService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentLibCustomerAService]
    });
  });

  it('should be created', inject([PaymentLibCustomerAService], (service: PaymentLibCustomerAService) => {
    expect(service).toBeTruthy();
  }));
});
