import { Injectable } from '@angular/core';
import { Employee } from '../Employee';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError as ObservableThrow } from 'rxjs';
import { of as ObservableOf } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: Employee[];

  constructor(private http:HttpClient) { 
    this.employeeList = [];
  }
  
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/api/employee');
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post('/api/employee', employee);
  }

  updateEmployee(employee: Employee) : Observable<Employee> {
    return this.http.patch<Employee>('/api/employee/' + employee.name,
    {
      age: employee.age,
      role : employee.role,
      email: employee.email,
      languages : employee.languages,
      os: employee.os
    });
  }


}
