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

  employees: Employee[] = [];

  message = '';

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

  showButtonInfo(pos: number) {
    this.message = `You clicked button : ${pos} for ${this.employees[pos].name}`; 
  }

  changeName(buttonPos: string, newVal: string) {
    this.employees[parseInt(buttonPos)].name = newVal;
  }


}
