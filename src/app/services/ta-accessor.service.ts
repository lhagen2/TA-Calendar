import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TAs155, TAs156, OfficeHours155, OfficeHours156 } from '../data/Data';
import { TimeEntry } from '../classes/time-entry';

@Injectable({
  providedIn: 'root'
})
export class TaAccessorService {

  dataUrl: string = './data/database.json';

  constructor(private http: HttpClient) { }

  getOfficeHours155() {
    return OfficeHours155;
  }

  getOfficeHours156() {
    return OfficeHours156;
  }
}

