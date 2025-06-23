/* Need to import CommonModule
which provides commonly used directives
such as [ngClass], [ngStyle], @if, @for, etc
 */
import { CommonModule } from '@angular/common';

/* Need to import FormsModule because we are using 
NgModel in the template */
import { FormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',

  // Need to include CommonModule and FormsModule
  // in imports metadata property  
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  showFirst = false;

  showSecond = false;

  age = 0;


}
