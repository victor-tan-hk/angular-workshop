import { Component } from '@angular/core';
import { Employee } from './Employee';
import { HighlightService } from './services/highlight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showEmployeeForm: boolean = false;
  showEmployeeList: boolean = false;
  employeeRole: string = 'Developer';

  constructor(public highlightService: HighlightService ) { }


  onCreateEmployee(event: boolean) {
    this.showEmployeeForm = false;
  }

}
