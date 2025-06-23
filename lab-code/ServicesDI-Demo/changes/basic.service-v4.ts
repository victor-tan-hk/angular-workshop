import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  myNumber = 10;

  setNum(newNum: number) {
    this.myNumber = newNum;
  }

  getNum() : number {
    return this.myNumber;
  }

}
