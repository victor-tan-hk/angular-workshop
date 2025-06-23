/* Need to import CommonModule
which provides commonly used directives
such as [ngClass], [ngStyle], @if, @for, etc
 */
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  
  // Need to include CommonModule
  // in imports metadata property  
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  styleTheText = {
    'font-size' : '30px',
    'font-style' : 'italic',
    'color' : 'green'
  }

  // No error checking performed
  // Make sure you enter a valid value
  changeColor(val: string) {
    console.log("New color : ", val);
    this.styleTheText.color = val;
  }

  // No error checking performed
  // Make sure you enter a valid value
  changeFontSize(val: string) {
    console.log("New font size : ", val);
    this.styleTheText['font-size'] = val + 'px';
  }


}
