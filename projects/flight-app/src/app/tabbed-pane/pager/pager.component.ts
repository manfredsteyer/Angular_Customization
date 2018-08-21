import { Component, OnInit } from '@angular/core';
import { TabbedPaneService } from '../tabbed-pane.service';

@Component({
  selector: 'pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  constructor(private svc: TabbedPaneService) { }

  ngOnInit() {
  }

  next(): void {
    this.svc.jumpBy$.next(1);
  }

  prev(): void {
    this.svc.jumpBy$.next(-1);
  }

}
