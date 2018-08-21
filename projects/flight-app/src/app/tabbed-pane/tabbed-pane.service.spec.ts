import { TestBed, inject } from '@angular/core/testing';

import { TabbedPaneService } from './tabbed-pane.service';

describe('TabbedPaneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabbedPaneService]
    });
  });

  it('should be created', inject([TabbedPaneService], (service: TabbedPaneService) => {
    expect(service).toBeTruthy();
  }));
});
