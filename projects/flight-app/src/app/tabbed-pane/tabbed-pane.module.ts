import { PagerComponent } from './pager/pager.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { TabbedPaneComponent } from './tabbed-pane/tabbed-pane.component';
import { TabComponent } from './tab/tab.component';
import { BadComponent } from './bad/bad.component';

 @NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TabbedPaneComponent,
        TabComponent,
        PagerComponent,
        BadComponent
    ],
    exports: [
        TabbedPaneComponent,
        TabComponent
    ]
 })
export class TabbedPaneModule {

}