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

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements
OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,
OnDestroy
{
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
