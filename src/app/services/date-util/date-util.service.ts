import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  getDay(input: string): string {
    if(input) {
      return moment(input,'YYYY-MM-DD').format('dddd');
    }
    return null;
  }

  getDate(input: string): string {
    if(input) {
      return moment(input,'YYYY-MM-DD').format('MMM Do');
    }
    return null;
  }
}
