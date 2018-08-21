import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLibCustomerAComponent } from './payment-lib-customer-a.component';

describe('PaymentLibCustomerAComponent', () => {
  let component: PaymentLibCustomerAComponent;
  let fixture: ComponentFixture<PaymentLibCustomerAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentLibCustomerAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentLibCustomerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
