import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaxCalculatorService } from './tax-calculator.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  /*   We use constructor injection as the mechanism
  to introduce the service (or dependency) into 
  the class */
  constructor(private taxCalcService: TaxCalculatorService) {
  }

  price = 10;

  finalPriceMessage = "";

  computeFinalPrice(items: string) {
    let finalPrice = this.taxCalcService.calcTotalPrice(parseInt(items), this.price);
    this.finalPriceMessage = "The final price is RM " + finalPrice; 
  }

}
