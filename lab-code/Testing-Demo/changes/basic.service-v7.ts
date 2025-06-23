import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {


  // A simple service with a single method to locate 
  // the longest string in an array of strings
  findLongestString(strArray: string[]) : string {

    // Check for boundary situation of empty array
    if (strArray.length < 1)
      return "";

    let curStrLength = strArray[0].length;
    let longestString = strArray[0];
    for (let i = 1; i <  strArray.length; i++) {
      if (curStrLength < strArray[i].length) {
        curStrLength = strArray[i].length;
        longestString = strArray[i];
      }
    }
    return longestString;
  }
}
