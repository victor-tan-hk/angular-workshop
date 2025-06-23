import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FakeAPIService } from './fakeAPI.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  singlePost!: Post | undefined;

  errorMessage: string = '';
  postId: number = 0;

  // Inject the service class that implements all the HTTP calls
  constructor(private fakeAPIService : FakeAPIService) {
  }

  retrievePost(hie: HTMLInputElement) {

    this.errorMessage = "";

/*     For the subscribe method here, we register 3 callbacks 
    to handle emission of normal values, errors and completion of stream */
    this.fakeAPIService.getSinglePost(parseInt(hie.value)).subscribe({

      // Handle successful emissions
      next: (val:Post) => { 
        // Use the spread operator to clone the val object
        // instead of assigning it directly to singlePost
        this.singlePost = { ...val};
      },

      // Handle errors in response
      error: (errorVal: HttpErrorResponse) => {        
        console.error('Request failed !');
        this.singlePost = undefined;
        // Can retrieve the error status code with status property
        this.errorMessage = "GET request failed with error code " + errorVal.status;
      },

      // Handle completion of stream
      complete : () => {                                   
        console.log('Request completed');       
      }

    });
  }

}
