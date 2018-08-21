import { DefaultPaymentService } from './default-payment.service';
import { NonCustomizedComponent } from './non-customized/non-customized.component';
import { ContainerComponent } from './container/container.component';
import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment.component';
import { PaymentService } from './payment.service';

@NgModule({
  imports: [
  ],
  providers: [ { provide: PaymentService, useClass: DefaultPaymentService }],
  declarations: [PaymentComponent, ContainerComponent, NonCustomizedComponent],
  exports: [PaymentComponent, ContainerComponent]
})
export class PaymentLibModule { }
