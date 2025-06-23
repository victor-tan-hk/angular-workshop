import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showCute: boolean = false;

  classesInArray = ['medium'];

  animals: string[] = ['cat','dog','mouse','horse'];

  
  addNewName(val: string) {
    this.classesInArray.push(val);
  }

  removeRecentName() {
    this.classesInArray.pop();
  }

}
