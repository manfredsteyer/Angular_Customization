/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DefaultPaymentService } from './default-payment.service';

describe('Service: DefaultPayment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultPaymentService]
    });
  });

  it('should ...', inject([DefaultPaymentService], (service: DefaultPaymentService) => {
    expect(service).toBeTruthy();
  }));
});
