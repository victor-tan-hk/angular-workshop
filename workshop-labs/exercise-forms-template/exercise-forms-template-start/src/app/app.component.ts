import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  employeeList : Employee[] = [];
  showEmployeeForm: boolean = false;
  showEmployeeList: boolean = false;
  employeeRole: string = 'Developer';

  onCreateEmployee(event: Employee) {
    this.showEmployeeForm = false;
    this.employeeList.push(event);
  }  

}
