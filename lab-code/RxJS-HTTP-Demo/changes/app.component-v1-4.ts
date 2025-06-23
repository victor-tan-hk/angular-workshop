import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ParentDataService } from './parent-data.service';


@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // Injecting the ParentData service via the constructor
  constructor(private dataService: ParentDataService) {}

  parentString = "";
  secondString = "";

  firstStringFromGreatGrandChild = "";

  processChangeFromChild(val: string) {
    this.firstStringFromGreatGrandChild = val;
  }

  transmitSecondString(val: string) {
    this.secondString = val;
    
    // Publishing the second string value to
    // the ParentDataService 
    this.dataService.setData(val);
  }



}
