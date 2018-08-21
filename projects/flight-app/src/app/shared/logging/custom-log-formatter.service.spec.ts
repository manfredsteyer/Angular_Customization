/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomLogFormatterService } from './custom-log-formatter.service';

describe('Service: CustomLogFormatter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomLogFormatterService]
    });
  });

  it('should ...', inject([CustomLogFormatterService], (service: CustomLogFormatterService) => {
    expect(service).toBeTruthy();
  }));
});
