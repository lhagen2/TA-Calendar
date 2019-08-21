import { Component } from '@angular/core';
import { TaAccessorService } from './services/ta-accessor.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { TimeEntry } from './classes/time-entry';
import { WeekDay } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {formatDate} from '@angular/common';
import * as moment from 'moment';

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
  today = new Date();
  myWeekday = this.WeekDays[this.today.getDay()];
  myTime = moment(this.today.toLocaleTimeString(), "LT");

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

      let endTime = moment(entry.EndTime, "LT");

      if(this.WeekDays[entry.WeekDay.toString()] == this.myWeekday && endTime > this.myTime){
        hours.push(entry);
      }
    });

    if (hours === undefined || hours.length == 0) {
      this.showTomorrow();
    } else {
      document.getElementById("tomorrow").innerHTML = "";
      this.officeHours = hours;
    }
  }

  showTomorrow(){
    document.getElementById("tomorrow").innerHTML = "There are no remaining office hours for today. Here are tomorrow's:";
      
    //weekday = tomorrow
    this.today.setDate(this.today.getDate() + 1);
    this.myWeekday = this.WeekDays[this.today.getDay()];

    var hours = [];

    //load officehours from myweekday being tomorrow
    this.officeHours.forEach(item => {
      let entry = item as TimeEntry;

      let endTime = moment(entry.EndTime, "LT");

      if(this.WeekDays[entry.WeekDay.toString()] == this.myWeekday){
        hours.push(entry);
      }
    });

    //change weekday back to today
    this.today.setDate(this.today.getDate() - 1);
    this.myWeekday = this.WeekDays[this.today.getDay()];

    this.officeHours = hours;
  }
}
