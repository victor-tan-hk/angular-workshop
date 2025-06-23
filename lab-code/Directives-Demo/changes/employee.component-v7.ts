import { Component, Input } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  /* We use the non-null assertion operator !
  to prevent compile time error with default
  compiler settings of strict type checking  */
  @Input()
  myEmployee!: Employee;

  @Input()
  employeeNum!: number;

}
