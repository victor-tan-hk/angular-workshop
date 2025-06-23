import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  price = 10;

  // Sales and service tax
  SST = 8;

  finalPriceMessage = "";

  calcTotalPrice(items: string) {
    let grossPrice = parseInt(items) * this.price;
    let finalPrice = grossPrice * (1 + (this.SST /100));
    this.finalPriceMessage = "The final price is RM " + finalPrice.toFixed(2); 
  }

}
