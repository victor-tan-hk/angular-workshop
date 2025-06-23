import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';


@Component({
  selector: 'app-first-child',
  imports: [],
  templateUrl: './first-child.component.html',
  styleUrl: './first-child.component.css'
})

export class FirstChildComponent implements
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
    
  @Input() childCounter: number = 0;
  @Output() textChanged: EventEmitter<string> = new EventEmitter();

  numDoCheck = 1;
  numAfterContentChecked = 1;
  numAfterViewChecked = 1;
  numOnChanges = 1;

  constructor() {
    console.log("FirstChildComponent:Constructor");
  }

  processTextChange(value: string) {
    this.textChanged.emit(value);
  }

  ngOnChanges() {
    console.log("FirstChildComponent:ngOnChanges called for # " + this.numOnChanges++);
  }

  ngOnInit() {
    console.log("FirstChildComponent:ngOnInit");
  }

  ngDoCheck() {
    console.log("FirstChildComponent:DoCheck called for # " + this.numDoCheck++);
  }

  ngAfterContentInit() {
    console.log("FirstChildComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("FirstChildComponent:AfterContentChecked for # " + this.numAfterContentChecked++);
  }

  ngAfterViewInit() {
    console.log("FirstChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("FirstChildComponent:AfterViewChecked for # " + this.numAfterViewChecked++);
  }

  ngOnDestroy() {
    console.log("FirstChildComponent:ngOnDestroy");
  }


}
