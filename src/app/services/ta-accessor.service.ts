import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TAs, OfficeHours } from '../data/Data';

@Injectable({
  providedIn: 'root'
})
export class TaAccessorService {

  dataUrl: string = './data/database.json';

  constructor(private http: HttpClient) { }

  getDatabase() {
    return OfficeHours;

  }
}

