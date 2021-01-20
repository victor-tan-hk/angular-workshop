import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Employee';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employee-modify',
  templateUrl: './employee-modify.component.html',
  styleUrls: ['./employee-modify.component.css']
})
export class EmployeeModifyComponent implements OnInit {

  @Input() public myEmployee: Employee;
  @Output() private modifiedEmployee : EventEmitter<boolean>;



  constructor(public employeeService: EmployeeService) { 
    this.modifiedEmployee = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }


  modifyEmployee(employeeForm: NgForm) {

    if (employeeForm.valid) {
      this.employeeService.updateEmployee(this.myEmployee).subscribe(
        (result: any) => {
          alert("Successfully modified employee");
        }, 
        (err) => {
          alert("Error ! " + err.error.msg);
        });
      this.modifiedEmployee.emit(true);

    }
    else
      alert("One of the form fields is invalid.\n Please correct");

  }  

}
