import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { FakeAPIService } from './fakeAPI.service';
import { Photo } from './photo';
import { Post } from './post';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  // Use non-null assertion operator ! on these two properties
  // to avoid compiler complaining about non-initialization 
  // Also make them a union type as they will be 
  // initially undefined until the HTTP response
  // returns from the fakeAPIService  
  singlePost!: Post | undefined;
  singlePhoto!: Photo | undefined;

  errorMessage: string = '';
  postId = 5;
  allPosts: Post[] = [];

  // Inject the service class that implements all the HTTP calls
  constructor(private fakeAPIService : FakeAPIService) {
  }

  ngOnInit() {

    this.fakeAPIService.getSinglePost(this.postId).subscribe(
      // Register just one callback to handle successful emission 
      // of values (i.e. the returned response)
      (val:Post) => { 
        // Use the spread operator to clone the val object
        // instead of assigning it directly to singlePost
        this.singlePost = { ...val};
      }
    );

  }

  retrievePhoto(photoId : string) {

    this.errorMessage = "";

/*     For the subscribe method here, we register 3 callbacks 
    to handle emission of normal values, errors and completion of stream */
    this.fakeAPIService.getSinglePhoto(parseInt(photoId)).subscribe({

      // Handle successful emissions
      next: (val:Photo) => { 
        // Use the spread operator to clone the val object
        // instead of assigning it directly to singlePost
        this.singlePhoto = { ...val};
      },

      // Handle errors in response
      error: (errorVal: HttpErrorResponse) => {        
        console.error('Request failed !');
        // Need to make the singlePhoto undefined
        // so that it does not appear in the template
        // if it still retains a valid value from a 
        // previous successful call
        this.singlePhoto = undefined;
        // Can retrieve the error status code with status property
        this.errorMessage = "GET request failed with error code " + errorVal.status;
      },

      // Handle completion of stream
      complete : () => {                                   
        console.log('Request completed');       
      }

    });
  }

  retrieveAllPosts() {

    this.fakeAPIService.getAllPosts().subscribe(
      // Register just one callback to handle successful emission 
      // of values (i.e. the returned response)
      (val:Post[]) => { 
        this.allPosts = val;
      }
    );

  }


}
