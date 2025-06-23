import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { FirstChildComponent } from './first-child/first-child.component';

@Component({
  selector: 'app-root',
  imports: [FirstChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements
OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,
OnDestroy
{

  parentCounter = 0;
  childText = '';
  showChild = true;
  toggleMessage = 'Hide child component';

  numDoCheck = 1;
  numAfterContentChecked = 1;
  numAfterViewChecked = 1;
  myString = '';

  constructor() {
    console.log("AppComponent:Constructor");
  }

  setStringVal(hie: HTMLInputElement) {
    this.myString = hie.value;
  }

  incCounter() {
    this.parentCounter++;
  }

  decCounter() {
    this.parentCounter--;
  }

  processChangeFromChild(val: string) {
    this.childText = val;
  }
  
  toggleChildDisplay() {
    this.showChild = !this.showChild;
    if (this.showChild) 
      this.toggleMessage = 'Hide child component';
    else
      this.toggleMessage = 'Show child component';
  }

  ngOnChanges() {
    console.log("AppComponent:ngOnChanges");
  }
 
  ngOnInit() {
    console.log("AppComponent:ngOnInit");
  }
 
  ngDoCheck() {
    console.log("AppComponent:DoCheck called for # " + this.numDoCheck++);
  }
 
  ngAfterContentInit() {
    console.log("AppComponent:ngAfterContentInit");
  }
 
  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked for # " + this.numAfterContentChecked++);
  }
 
  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked for # " + this.numAfterViewChecked++);
  }
 
  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }
}
