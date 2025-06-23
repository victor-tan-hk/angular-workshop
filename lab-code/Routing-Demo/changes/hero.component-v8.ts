import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

import { Hero } from '../hero';

import { LocalAPIService } from '../localAPI.service';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})


export class HeroComponent implements OnInit {

  errorMessageforSingleHero!: string;

  // This is intended to hold a single hero returned from a call to:
  // http://localhost:3000/Heroes/xx
  singleHero!: Hero | null;

  heroId = '';
  firstname = '';

  // Inject both the localAPIService and the ActivatedRouted service

  constructor (private localAPIService : LocalAPIService, private route: ActivatedRoute) {
    const params = this.route.snapshot.params;
    this.heroId = params['id'];
    this.firstname = params['firstname'];
    console.log(`Hero id : ${this.heroId}, Hero first name : ${this.firstname}`);
  }

  ngOnInit() {
    this.errorMessageforSingleHero = "";

/*     For the subscribe method here, we register 3 callbacks 
    to handle emission of normal values, errors and completion of stream */
    this.localAPIService.getSingleHero(parseInt(this.heroId)).subscribe({

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
          this.errorMessageforSingleHero = "The hero with id " + this.heroId + " does not exist on the server";
        else if (errorVal.status === 500)
          this.errorMessageforSingleHero = "The backend server seems to be down";
        else if (errorVal.status === 401 || errorVal.status === 401) 
          this.errorMessageforSingleHero = "Server requires authentication and / or authorization";
        else if (errorVal.status === 0)
          this.errorMessageforSingleHero = "No network connection to server";
        // include more else if messages to cater for different status codes
        else 
          this.errorMessageforSingleHero = "Unknown error in network request";

        this.singleHero = null;
      },

      // Handle completion of stream
      complete : () => {                                   
        console.log('Request completed');       
      }

    });
  }  


}
