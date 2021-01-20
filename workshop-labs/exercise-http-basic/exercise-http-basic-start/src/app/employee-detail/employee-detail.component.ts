import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../services/employee.service';
import { HighlightService } from '../services/highlight.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  
  @Input() public myEmployee: Employee;
  public employeeClasses;

  constructor(public highlightService: HighlightService) { }

  ngOnInit() {
    let stringToCheck: string;
    if (this.myEmployee.role === "Developer")
      stringToCheck = this.myEmployee.languages;
    else
      stringToCheck = this.myEmployee.os;

    this.employeeClasses = {
      'important' : this.highlightService.checkImportant(stringToCheck),
    }
  }

}
