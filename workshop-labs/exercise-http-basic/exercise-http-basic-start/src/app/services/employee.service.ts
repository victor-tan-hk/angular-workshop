import { Injectable } from '@angular/core';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: Employee[];

  constructor() { 
    this.employeeList = [];
  }
  
  getEmployees(): Employee[] {
    return this.employeeList;
  }

  addEmployee(employee: Employee) {
    this.employeeList.push(employee);
  }

}
