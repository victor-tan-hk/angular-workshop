
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})

export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnits: string): any {
    if (!value) {
      return '';
    }
    console.log(value);
    return (value);

  }
}




