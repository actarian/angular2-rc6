import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../tab/tab.interface';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'ws-tab',
  templateUrl: 'app/tab/tab.component.html'
})
export class TabComponent implements OnInit, Tab {
  @Input() title:string = 'Title';
  @Input() active:boolean = false;
  constructor(private tabs: TabsComponent) {}
  ngOnInit() {
    this.tabs.addTab(this);
  }
}
