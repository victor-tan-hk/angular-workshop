import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../Employee';
import { HighlightService } from '../services/highlight.service';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent implements OnInit {

  employeeList: Employee[] = [];
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeList = this.employeeService.getEmployees();
  }

}
