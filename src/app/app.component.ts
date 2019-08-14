import { Component } from '@angular/core';
import { TaAccessorService } from './services/ta-accessor.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { TimeEntry } from './classes/time-entry';
import { WeekDay } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  officeHours: object[];
  WeekDays = WeekDay;
  class = "155";
  hours155: object[];
  hours156: object[];
  myWeekday = this.WeekDays[new Date().getDay()];
  myTime = new Date().getHours();

  constructor(accessor: TaAccessorService) {
    this.hours155 = accessor.getOfficeHours155();
    this.hours156 = accessor.getOfficeHours156();
  }

  updateHours(classNumber: string){

    if(classNumber == "156"){
      this.officeHours = this.hours156;
    } else {
      this.officeHours = this.hours155;
    }

    var hours = [];

    this.officeHours.forEach(item => {
      let entry = item as TimeEntry;
      if(this.WeekDays[entry.WeekDay.toString()] == this.myWeekday 
      //&& parseInt(entry.StartTime.split(':')[0]) > this.myTime
      ){
        hours.push(entry);
      }
    });

    this.officeHours = hours;
  }
}
