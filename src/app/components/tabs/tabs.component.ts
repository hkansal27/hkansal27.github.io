import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Output() public tabClickHandler = new EventEmitter<string>();

  selectedTab = 'U';

  constructor() { }

  ngOnInit() {
    this.tabClickHandler.emit(this.selectedTab);
  }

  updateSelectedTab(clickedTabChar) {
    this.selectedTab = clickedTabChar;
    this.tabClickHandler.emit(this.selectedTab);
  }

}
