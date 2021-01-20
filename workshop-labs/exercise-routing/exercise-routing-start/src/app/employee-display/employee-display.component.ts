import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../Employee';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent implements OnInit {

  selectedEmployee: Employee;
  employeeList$: Observable<Employee[]>;
  showList: boolean = true;
  showModifyButton = false;
  employeeRole: string = 'Developer';


  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeList$ = this.employeeService.getEmployees();
  }

  onSelectEmployee(pos: number) {

    this.employeeList$.subscribe(
      (employees) => {
        this.selectedEmployee = employees[pos];
      });
    this.showModifyButton = true;
  }

  onModify() {
    this.showList = false;
  }

}
