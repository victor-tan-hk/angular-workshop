import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  person = {
    firstName: 'John',
    lastName: 'Wick'
  };

  contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    address: {
      building: '4000',
      street: 'North 1st street',
      city: 'San Jose',
      state: 'CA',
      country: {
        name: 'USA',
        region: 'North America',
        population: 350000000
      }
    }
  };

  simpleArray = ['batman','spiderman', 35, true, 'wonderwoman'];
  
  complexArray = [
    {
      firstName: 'Tony',
      lastName: 'Stark'
    },
    {
      firstName: 'Bruce',
      lastName: 'Banner'
    },
    {
      firstName: 'Peter',
      lastName: 'Parker'
    },
  ]


}
