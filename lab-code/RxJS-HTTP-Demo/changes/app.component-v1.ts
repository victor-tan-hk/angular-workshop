import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  counter = 0;
  startCountup() {

    setInterval(() => {
      this.counter++;
    }, 1000);
  
  }

  firstMessage = '';
  secondMessage = '';
  startCountdown() {

    this.firstMessage = "A message will appear below after 5 seconds";
    
    setTimeout(() => {
      this.secondMessage = "I LOVE ANGULAR !!";
    },5000);
  }

}
