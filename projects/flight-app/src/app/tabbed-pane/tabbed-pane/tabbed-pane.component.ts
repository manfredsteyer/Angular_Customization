import {
  Component, OnInit, AfterContentInit, Input, EventEmitter, Output, QueryList,
  ContentChildren
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabbedPaneService } from '../tabbed-pane.service';

@Component({
  selector: 'tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.css'],
  viewProviders: [TabbedPaneService]
})
export class TabbedPaneComponent implements OnInit, AfterContentInit {

  @Input() activeId: number;
  @Output() activeIdChange = new EventEmitter<number>();

  @ContentChildren(TabComponent)
  tabList: QueryList<TabComponent>;

  get tabs(): TabComponent[] {
    if (!this.tabList) return [];
    return this.tabList.toArray();
  }

  constructor(private svc: TabbedPaneService) {
  }

  ngOnInit() {
    this.svc.jumpBy$.subscribe(offset => {
      this.activeId += offset;
      this.activate(this.activeId);
    });
  }

  get currentTabTitle(): string {
    if (!this.tabs || !this.tabs[this.activeId-1]) return null;
    return this.tabs[this.activeId-1].title;
  }


  ngAfterContentInit(): void {
    this.activate(this.activeId);
  }

  activate(id: number) {
    this.activeId = id;
    for(let tab of this.tabs) {
      tab.visible = tab.id == this.activeId;
    }
    this.activeIdChange.emit(this.activeId);
  }
}
