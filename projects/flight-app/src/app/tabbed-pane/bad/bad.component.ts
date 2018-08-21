import { Component, OnInit } from '@angular/core';
import { TabbedPaneService } from '../tabbed-pane.service';


@Component({
  selector: 'bad',
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.css']
})
export class BadComponent implements OnInit {

  constructor(private svc: TabbedPaneService) { }

  ngOnInit() {
    setTimeout(() => {
      this.svc.jumpBy$.next(1);
    }, 3000);
  }

}
