import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLibComponent } from './payment-lib.component';

describe('PaymentLibComponent', () => {
  let component: PaymentLibComponent;
  let fixture: ComponentFixture<PaymentLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
