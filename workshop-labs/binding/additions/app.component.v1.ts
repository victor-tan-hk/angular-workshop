import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myPlace: string = "Kuala Lumpur";

  getFixedString(): string {
    return 'Java and C++';
  }
}
