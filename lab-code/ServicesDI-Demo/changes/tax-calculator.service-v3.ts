// import the inject method to use
import { Injectable, inject } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculatorService {

  // Injecting the LoggerService as we did 
  // previously for the case of a component
  private loggerService = inject(LoggerService);


  // Sales and service tax
  SST = 8;

  // Business domain logic implemented here
  calcTotalPrice(numitems: number, price : number) : string {
    let grossPrice = numitems * price;
    let finalPrice = grossPrice * (1 + (this.SST /100));
    this.loggerService.logMessage("Log output " + finalPrice);
    return finalPrice.toFixed(2);
  }

}
