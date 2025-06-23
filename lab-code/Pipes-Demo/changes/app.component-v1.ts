import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dateNumber: number;
  dateObj: Date;
  dateString: string;
  
  constructor() {

/*     For more info, see:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#constructor
 */

    // Gets the current date/time as an object
    this.dateObj = new Date();
/* 
    Gets the current date/time as the number of milliseconds elapsed since 
    January 1, 1970 00:00:00 UTC */
    this.dateNumber = Date.now();

/*     Providing date/time as string in accordance to 
    https://www.w3.org/TR/NOTE-datetime */
    this.dateString = "2022-04-22T19:16:23";

    console.log("Date as an object ", this.dateObj);
    console.log("Date as a number ", this.dateNumber);
    console.log("Date as a string ",this.dateString);
  }
}
