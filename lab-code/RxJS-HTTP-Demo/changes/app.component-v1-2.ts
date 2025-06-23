import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  /*   Convention is for observable properties / variables 
  to have trailing $ to distinguish them from normal
  properties */
  timerObservable$!: Observable<number>;

  constructor() {

/*     Here we simulate an asynchronous stream of data 
    arriving by using the setInterval timer function to emit 
    a number every 1 second. Note that this function will not
    be called until the arrow function is invoked
    at the time when a subscription is made to the observable  */

    this.timerObservable$ = new Observable(
      (observer) => {
          let count = 1;
          setInterval(() => {
          observer.next(count);
          count++;
        }, 1000);
      }
    );
  }


  mySubscription! : Subscription;
  counter = 0;

  startCountup() {

/*  Subscribe by passing an object with 3 arrow functions
    as properties. 
    This calls the arrow function in the Observable 
    which in turn starts the stream of values. 
    We maintain access to the subscription object 
    so that we can have the option of unsubscribing later */

    this.mySubscription = this.timerObservable$.subscribe({ 

      // First arrow function property is called for 
      // successful emissions from stream
      next : event => this.counter = event,
    
      // Second arrow function property is called for 
      // errors in emissions from stream
      // Will not happen in this example, but may happen
      // for HTTP requests / responses      
      error: error => console.log(error),
      
      // Third arrow function property is called for 
      // completion in emissions from stream        
      complete: () => console.log('complete!')

    });

  
  }


  firstMessage = '';
  startCountdown() {

    this.firstMessage = "The above count up will stop after 5 seconds";

/*     By calling unsubscribe on the subscription object after 
    5 seconds, we cancel the subscription and no longer receive 
    any more values from the ongoing data stream, even though
    this is still running in the background */

    setTimeout(
      () => {
        this.mySubscription.unsubscribe();
      },5000);
  }

}
