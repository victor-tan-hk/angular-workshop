import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  myLocation = 'Kuala Lumpur';

  getMoreLanguages(): string {
    return 'Java and JavaScript';
  }

}
