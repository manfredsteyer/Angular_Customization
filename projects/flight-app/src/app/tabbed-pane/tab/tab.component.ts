import { Component, OnInit, Input, Optional } from '@angular/core';
import { TabbedPaneComponent } from '../tabbed-pane/tabbed-pane.component';
@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input() title: string;
  @Input() id: number;

  visible: boolean = true;
}
