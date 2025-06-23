import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomStringsService {


    getRandomChar(min: number, max: number) {
        let charCode : number = Math.random() * (max - min) + min;
        return String.fromCharCode(charCode);
    }
    

    getRandomArrayStrings() : string[] {

        // Create an array that will contain a random
        // number of elements between 1 and 10
        let arraySize = Math.random() * (11 - 1) + 1;

        let strArray: string[] = [];

        for (let i = 0; i < arraySize; i++) {

            // Create a string that will contain random
            // lowercase characters with a length between 1 and 10
            let stringSize = Math.random() * (11 - 1) + 1;
            let actualString = '';
            for (let j = 0; j < stringSize; j++)
                actualString += this.getRandomChar(97,123);
            strArray.push(actualString);
        }

        return strArray;
    }

}
