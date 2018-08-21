import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-payment-lib',
  template: `
  <div style="border: 1px dashed silver; padding:20px; margin-bottom:20px">
  <div class="form-group">
    <label>Bank Code (BIC):</label>
    <input name="bic" class="form-control">
  </div>
  <div class="form-group">
    <label>Account Number (IBAN):</label>
    <input name="bic" class="form-control">
  </div>
  </div>
  `,
  styles: []
})
export class PaymentCustomerAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
