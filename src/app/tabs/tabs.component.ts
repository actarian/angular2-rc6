import { Component, EventEmitter, Output } from '@angular/core';

import { TabComponent } from '../tab/tab.component';
import { Tab } from '../tab/tab.interface';

@Component({
  selector: 'ws-tabs',
  templateUrl: 'app/tabs/tabs.component.html',
})
export class TabsComponent {
  tabs: TabComponent[] = [];
  @Output() tabEmitter = new EventEmitter();

  doSelect(tab: Tab) {
    this.tabs.forEach((other) => {
      other.active = false;
    });
    tab.active = true;
    this.tabEmitter.emit({ value: tab });
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
}
