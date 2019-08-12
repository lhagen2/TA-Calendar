import { Component } from '@angular/core';
import { TaAccessorService } from './services/ta-accessor.service';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { TimeEntry } from './classes/time-entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  officeHours: object;

  constructor(accessor: TaAccessorService) {

    this.officeHours = accessor.getDatabase();
    console.log(this.officeHours);

  }


  title = 'TA-Calendar';
}
