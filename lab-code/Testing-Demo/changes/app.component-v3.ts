import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  parentCounter = 0;

  childText = '';

  incCounter() {
    this.parentCounter++;
  }

  decCounter() {
    this.parentCounter--;
  }

  processChangeFromChild(val: string) {
    this.childText = val;
  }

}
