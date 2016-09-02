import { Component } from '@angular/core';

import { Tab } from './tab/tab.interface';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TabsComponent, TabComponent]
})
export class AppComponent {
  title = 'app works!';
  logs:string[] = [];
  onSelected(event) {
    this.logs.push('Selected Tab with title: ' + event.value.title);
  }
}
