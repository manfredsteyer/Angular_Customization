/*
 * Public API Surface of payment-lib
 */

export * from './lib/payment-lib.module';

export * from './lib/payment.service';
export * from './lib/default-payment.service';

// Payment-Card
export * from './lib/container/container.component';

// Not customized component with buyer's name
export * from './lib/non-customized/non-customized.component';

// Customized component with payment details 
// (e. g. credit card, bank info etc.)
export * from './lib/payment.component';