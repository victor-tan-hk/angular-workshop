/* Need to import CommonModule
which provides commonly used directives
such as [ngClass], [ngStyle], @if, @for, etc
 */
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Employee } from './Employee';
import { EmployeeComponent } from './employee/employee.component';


@Component({
  selector: 'app-root',

  // Need to include CommonModule and EmployeeComponent
  // in imports metadata property 
  imports: [RouterOutlet, CommonModule, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  employees: Employee[] = [];

  // initializing array with 8 new objects
  constructor() {
    this.employees.push(new Employee("Peter",42,true));
    this.employees.push(new Employee("Jane",22,false));
    this.employees.push(new Employee("Hilary",36,true));
    this.employees.push(new Employee("Scot",27,false));
    this.employees.push(new Employee("Noah",50,true));
    this.employees.push(new Employee("Olivia",20,false));
    this.employees.push(new Employee("Amelia",60,true));
    this.employees.push(new Employee("William",29,false));
  }


}
