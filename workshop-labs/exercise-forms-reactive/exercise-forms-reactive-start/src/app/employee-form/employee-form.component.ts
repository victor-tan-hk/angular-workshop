import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Input() public myRole: string;
  @Output() private createdEmployee : EventEmitter<Employee>;

  myEmployee: Employee = new Employee('',0,'','','','');


  constructor() { 
    this.createdEmployee = new EventEmitter<Employee>();
  }

  ngOnInit() {

  }

  createEmployee(employeeForm) {

    this.myEmployee.role = this.myRole;
    console.log(this.myEmployee);
    if (employeeForm.valid)
      this.createdEmployee.emit(this.myEmployee);
    else
      alert("One of the form fields is invalid.\n Please correct");

  }

}
