import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  myEmployee: Employee = new Employee('',0,'','','');

  constructor() { 
  }

  ngOnInit() {

  }
}
