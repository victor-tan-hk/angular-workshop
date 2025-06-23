/* Need to import CommonModule
which provides commonly used directives
such as [ngClass], [ngStyle], @if, @for, etc
 */
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Employee } from './Employee';


@Component({
  selector: 'app-root',

  // Need to include CommonModule 
  // in imports metadata property 
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // initial default value 100
  // so all employees are listed
  ageLimit: number = 100;

  employees: Employee[] = [];

  // initializing array with 8 new objects
  constructor() {
    this.employees.push(new Employee("Peter",42,true));
    this.employees.push(new Employee("Jane",22,false));
    this.employees.push(new Employee("Hilary",36,true));
    this.employees.push(new Employee("Scot",27,false));
    this.employees.push(new Employee("Noah",50,true));
  }

  setNewLimit(val: string) {
    this.ageLimit = parseInt(val); 
  }


}
