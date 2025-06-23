import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

import { Hero } from './hero';
import { LocalAPIService } from './localAPI.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  errorMessageforSingleHero!: string;

  errorMessageForAllHeroes!: string;

  // This is intended to hold a single hero returned from a call to:
  // http://localhost:3000/Heroes/xx
  singleHero!: Hero;

  // This is intended to hold all Heroes returned from a call to:
  // http://localhost:3000/Heroes
  allHeroes: Hero[] = [];

  // This is intended to hold all Heroes returned from a call to:
  // http://localhost:3000/Heroes?firstName=??&lastName=??
  heroesWithSpecificNames: Hero[] = [];

  // This is intended to hold all Heroes returned from a call to:
  // http://localhost:3000/Heroes?age_gte=???&age_lte=???
  heroesWithAgeRange: Hero[] = [];

  // Inject the service class that implements all the HTTP calls
  constructor(private localAPIService : LocalAPIService) {
  }

  getHeroUsingID(heroId: string) {

    this.errorMessageforSingleHero = "";

/*     For the subscribe method here, we register 3 callbacks 
    to handle emission of normal values, errors and completion of stream */
    this.localAPIService.getSingleHero(parseInt(heroId)).subscribe({

      // Handle successful emissions
      next: (val:Hero) => { 
        // Use the spread operator to clone the val object
        // instead of assigning it directly to singlePost
        this.singleHero = { ...val};
      },

      // Handle errors in response
      error: (errorVal: HttpErrorResponse) => {  
        console.error('Request failed !');
        console.log("The HTTP error code is ", errorVal.status);                              

        // Check the HTTP error status code to determine appropriate message to show user
        // https://www.dotcom-monitor.com/blog/the-10-most-common-http-status-codes/
        // 404 most common error code -> means the server is alive, but the resource could not be located
        if (errorVal.status === 404) 
          this.errorMessageforSingleHero = "The hero with id " + heroId + " does not exist on the server";
        else if (errorVal.status === 500)
          this.errorMessageforSingleHero = "The backend server seems to be down";
        else if (errorVal.status === 401 || errorVal.status === 401) 
          this.errorMessageforSingleHero = "Server requires authentication and / or authorization";
        else if (errorVal.status === 0)
          this.errorMessageforSingleHero = "No network connection to server";
        // include more else if messages to cater for different status codes
        else 
          this.errorMessageforSingleHero = "Unknown error in network request";

        this.singleHero = {
          "id": -1,
          "firstName": "",
          "lastName": "",
          "age" : -1,
          "married" : false,
          "job" : ""
        };
      },

      // Handle completion of stream
      complete : () => {                                   
        console.log('Request completed');       
      }

    });
  }


  getHeroesUsingNames(fName: string, lName: string) {
    fName = fName.trim();
    lName = lName.trim();
    // Checking if there is a non-empty string for either
    // fName or lName before making an actual HTTP request
    if (fName || lName) {

      this.localAPIService.getHeroesUsingNames(fName, lName).subscribe(
        // Register just one callback to handle successful emission 
        // of values (i.e. the returned response)
        (val:Hero[]) => { 
          this.heroesWithSpecificNames = val;
        }
      );

    }

  }


  getHeroesWithAgeRange(minAge: string, maxAge: string) {
    let startAge = parseInt(minAge);
    let endAge = parseInt(maxAge);

    this.localAPIService.getHeroesWithAgeRange(startAge, endAge).subscribe(
      // Register just one callback to handle successful emission 
      // of values (i.e. the returned response)
      (val:Hero[]) => { 
        this.heroesWithAgeRange = val;
      }
    );

  }


  retrieveAllHeroes () {

    this.errorMessageForAllHeroes = "";

/*     For the subscribe method here, we register 3 callbacks 
    to handle emission of normal values, errors and completion of stream */
    this.localAPIService.getAllHeroes().subscribe({

      // Handle successful emissions
      next: (val:Hero[]) => { 
        this.allHeroes = val;
      },

      // Handle errors in response
      error: (errorVal: HttpErrorResponse) => {

        console.error('Request failed !');
        console.log("The HTTP error code is ", errorVal.status);                              

        // Check the HTTP error status code to determine appropriate message to show user
        // https://www.dotcom-monitor.com/blog/the-10-most-common-http-status-codes/
        // 404 most common error code -> means the server is alive, but the resource could not be located
        if (errorVal.status === 404) 
          this.errorMessageForAllHeroes = "The server does not seem to have the heroes";
        else if (errorVal.status === 500)
          this.errorMessageForAllHeroes = "The backend server seems to be down";
        else if (errorVal.status === 401 || errorVal.status === 401) 
          this.errorMessageForAllHeroes = "Server requires authentication and / or authorization";
        else if (errorVal.status === 0)
          this.errorMessageForAllHeroes = "No network connection to server";
        // include more else if messages to cater for different status codes
        else 
          this.errorMessageForAllHeroes = "Unknown error in network request";

      },

      // Handle completion of stream
      complete : () => {                                   
        console.log('Request completed');       
      }      

    });


  }



}
