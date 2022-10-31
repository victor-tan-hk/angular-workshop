import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myLocation = 'Kuala Lumpur';

  getMoreLanguages(): string {
    return 'Java and JavaScript';
  }

}
