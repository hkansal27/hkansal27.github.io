import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Campaign } from 'src/app/models/campaign';
import { MatDatepickerInputEvent } from '@angular/material';

import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public events: Campaign;
  public selectedTab: string;
  constructor(
    private tabsService: DataService
  ) { }

  ngOnInit() {
    this.getTabsData();
  }

  private getTabsData() {
    this.tabsService.getTabData().subscribe((data) => {
      this.events = data;
    });
  }

  private updateSelectedTab(tabName) {
    this.selectedTab = tabName;
  }

  getDiferenceInDays(theDate: string): string {
    const date = new Date(theDate).getTime();
    const currentDate = new Date().getTime();
    const diff = Math.round(Math.abs(date - currentDate) / (1000 * 60 * 60 * 24));
    if (date < currentDate) {
      return `${diff} days ago`;
    } else {
      return `After ${diff} days`;
    }
  }

  public openCalendar(index) {
    const element = document.getElementById(`date-${index}`);
    if (element) {
      element.click();
    }
  }

  addEvent(index, event: MatDatepickerInputEvent<Date>) {
    let dateValue = moment(event.value).format('YYYY-MM-DD');
    this.events[this.selectedTab][index].date = dateValue;
  }
}
