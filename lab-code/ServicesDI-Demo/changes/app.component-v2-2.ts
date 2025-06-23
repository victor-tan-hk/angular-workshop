
// Import the inject method to use
import { Component, inject } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { TaxCalculatorService } from './tax-calculator.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // Alternative inject method available in Angular 17
  // to inject a service class dependency for use in a component
  private taxCalcService = inject(TaxCalculatorService);

  /*   We no longer use constructor injection */
  // constructor(private taxCalcService: TaxCalculatorService) {
  // }

  price = 10;

  finalPriceMessage = "";

  computeFinalPrice(items: string) {
    let finalPrice = this.taxCalcService.calcTotalPrice(parseInt(items), this.price);
    this.finalPriceMessage = "The final price is RM " + finalPrice; 
  }

}
