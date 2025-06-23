import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Need to import FirstChildComponent explicitly
import { FirstChildComponent } from './first-child/first-child.component';

@Component({
  selector: 'app-root',
  // Include FirstChildComponent as well into the imports 
  // metatada property 
  imports: [RouterOutlet, FirstChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  parentCounter = 0;

  incCounter() {
    this.parentCounter++;
  }

  decCounter() {
    this.parentCounter--;
  }
}
