/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaymentCustomerAService } from './payment-customer-a.service';

describe('Service: PaymentCustomerA', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentCustomerAService]
    });
  });

  it('should ...', inject([PaymentCustomerAService], (service: PaymentCustomerAService) => {
    expect(service).toBeTruthy();
  }));
});
