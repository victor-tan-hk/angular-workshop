import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  favFont = "Courier, monospace";

  isSpecial = true;

  getTextColor() {
    return "red";
  }

  // Approach #1: A string containing style properties separated by ;
  styleFirstImage = "float:left; width:100px; height:auto;"

  // Approach #2: An object with style names as the keys and style values 
  // as the values
  styleSecondImage = {
    border: "2px solid red",
    "border-radius": "8px",
    width: "200px",
  }


}
