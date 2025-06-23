import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'currencyconvert'})
export class CurrencyConverterPipe implements PipeTransform {
  
  USDtoMYR: number = 4.370239;  

/*   First argument is the number to convert
  Second argument is a string to determine the conversion direction 
  Give this a default value of toMYR in the event it is not supplied
 */  
  transform(value: number, convType: string = 'toMYR') : number {

    if (convType === 'toMYR') {
        return value * this.USDtoMYR;
    }
    else if (convType === 'toUSD') {
        return value / this.USDtoMYR;
    }
    else
        return value;
  }
}