import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from "./post";

@Injectable({
    providedIn: 'root'
})
export class FakeAPIService {

    // Typically all REST APIs have a base URL
    // on which you add additional endpoint info to create
    // a complete URL to send a HTTP request to
    baseURL: string = "https://jsonplaceholder.typicode.com/";

    // Inject HttpClient as a service via the constructor
    constructor(private http: HttpClient) { }

    // For all the Observables return from the calls to the 
    // HttpClient get method, we type them specifically using
    // either an interface or class

    getSinglePost(postId: number) : Observable<Post> {
        let finalUrl = this.baseURL + 'posts/' + postId;
        console.log("Sending GET request to : ",finalUrl);
        return this.http.get<Post>(finalUrl);
    }

}
