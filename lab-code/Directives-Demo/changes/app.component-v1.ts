
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

  // 3 different items to bind to [ngClass]

  // Approach #1: A space-delimited string of class names
  stringOfClasses = "special safe";

  // Approach #2: An  object with class names as the keys and 
  // truthy or falsy expressions as the values
  classesToAdd = {
    large : false,
    special : this.stringOfClasses.length > 2,
    danger :  this.alwaysReturnTrue ()
  };

  // Approach #3: An array of class names
  classesInArray = ['medium','emphasize','safe'];

  alwaysReturnTrue () {
    return true;
  }

  isThisForReal = true;

  isItDangerous = true;


}
