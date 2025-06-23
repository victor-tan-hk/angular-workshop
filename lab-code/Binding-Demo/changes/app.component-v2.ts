import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = "Demonstrating property binding";
  
  isDisabled = true;

  // possible values: cat, dog, horse
  imageName = 'horse';

  // possible values: www.cnn.com, www.bbc.com, etc
  newsSite = 'www.bbc.com';

}
