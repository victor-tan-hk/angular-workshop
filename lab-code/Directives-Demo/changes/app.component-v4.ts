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

import { Employee } from './Employee';


@Component({
  selector: 'app-root',

  // Need to include CommonModule and FormsModule
  // in imports metadata property 
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  animals: string[] = ['cat','dog','mouse','horse'];

  employees: Employee[] = [];

  // initializing array with 4 new objects
  constructor() {
    this.employees.push(new Employee("Peter",42,true));
    this.employees.push(new Employee("Jane",22,false));
    this.employees.push(new Employee("Hilary",36,true));
    this.employees.push(new Employee("Scot",27,false));
  }

  removeEmployee() {
    this.employees.pop();
  }

}
