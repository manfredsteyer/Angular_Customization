import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-payment-lib',
  template: `
  <div style="border: 1px dashed silver; padding:20px; margin-bottom:20px">
    <div class="form-group">
      <label>Card Type:</label>
      <select class="form-control"><option></option><option>Angular Card</option><option>Master Card</option><option>Visa</option></select>
    </div>
    <div class="form-group">
      <label>Card Number:</label>
      <input name="bic" class="form-control">
    </div>
  </div>
  `,
  styles: []
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
