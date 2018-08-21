/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';

describe('Service: CustomPreloadingStrategy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomPreloadingStrategyService]
    });
  });

  it('should ...', inject([CustomPreloadingStrategyService], (service: CustomPreloadingStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
