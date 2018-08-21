/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsoleAppenderService } from './console-appender.service';

describe('Service: ConsoleAppender', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsoleAppenderService]
    });
  });

  it('should ...', inject([ConsoleAppenderService], (service: ConsoleAppenderService) => {
    expect(service).toBeTruthy();
  }));
});
