import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../services/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Input() public myRole: string;
  @Output() private createdEmployee : EventEmitter<boolean>;

  myEmployee: Employee = new Employee('',0,'','','','');


  constructor(public employeeService:EmployeeService) { 
    this.createdEmployee = new EventEmitter<boolean>();
  }

  ngOnInit() {

  }

  createEmployee(employeeForm: NgForm) {

    this.myEmployee.role = this.myRole;
    if (employeeForm.valid) {
      this.employeeService.addEmployee(this.myEmployee);
      this.createdEmployee.emit(true);

    }
    else
      alert("One of the form fields is invalid.\n Please correct");

  }

}
