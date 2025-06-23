import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Hero } from './hero';
import { LocalAPIService } from './localAPI.service';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // Create a new FormGroup with nested FormControls to get info
  // for a new Hero
  heroForm = new FormGroup({
    id: new FormControl(0),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(0),
    maritalStatus: new FormControl('S'),
    job: new FormControl('')
  });

  formActionMessage = "Provide details for a new hero";
  formButtonMessage = "Create new hero";

  retrieveMessage!: string;
  postMessage!: string;

  allHeroes: Hero[] = [];

  // Inject the service class that implements all the HTTP calls
  constructor(private localAPIService: LocalAPIService) {
  }

  onSubmit() {

    console.log("Form data : ", this.heroForm.value);

    //Creating a new Hero object from the values in heroForm
    // This is done regardless of whether we are creating a new
    // Hero or modifying details of an existing one
    let newHero: Hero = {
      id: <number> this.heroForm.get('id')?.value,
      firstName: <string> this.heroForm.get('firstName')?.value,
      lastName: <string> this.heroForm.get('lastName')?.value,
      age: <number> this.heroForm.get('age')?.value,
      married: this.heroForm.get('maritalStatus')?.value === 'M',
      job: <string> this.heroForm.get('job')?.value
    };

    console.log('Created a new Hero object from form input : ', newHero);

    // reset the form back to original values
    this.heroForm.reset();
    this.heroForm.get("maritalStatus")?.setValue("S");

    // Check which service method to call 
    if (this.formButtonMessage === "Create new hero") {

      this.localAPIService.submitNewHero(newHero).subscribe({
        // Handle successful emissions
        next: (resp: HttpResponse<any>) => {
          console.log("The response received back is ", resp);
          // Check for a status code of 201
          // This is the standard response for a successful POST request
          if (resp.status === 201) {
            this.postMessage = 'New hero has been successfully stored in backend service';
          } else {
            this.postMessage = 'An unexpected response has been received';
          }
        },

        // Handle errors in response
        error: (errorVal: HttpErrorResponse) => {
          console.error('Request failed with response ', errorVal);
          this.postMessage = "A hero with id " + newHero.id + " already exists";
        },

        // Handle completion of stream
        complete: () => {
          console.log('Request completed');
        }


      });

    } else {

      this.localAPIService.modifyExistingHero(newHero).subscribe({
        // Handle successful emissions
        next: (resp: HttpResponse<any>) => {
          console.log("The response received back is ", resp);
        },

        // Handle errors in response
        error: (errorVal: HttpErrorResponse) => {
          console.error('Request failed with response ', errorVal);
          this.postMessage = "The hero with id " + newHero.id + " does not exist";  
        },

        // Handle completion of stream
        complete: () => {
          console.log('Request completed');
        }

      });

      // Regardless of whether we are creating an new hero or 
      // modifying an existing one, we can reset the messages for the 
      // form and button back to their default
      this.formActionMessage = "Provide details for a new hero";
      this.formButtonMessage = "Create new hero";

    }

  }

  getHeroUsingID(heroId: string) {

    this.retrieveMessage = "";

    /*     For the subscribe method here, we register 3 callbacks 
        to handle emission of normal values, errors and completion of stream */
    this.localAPIService.getSingleHero(parseInt(heroId)).subscribe({

      // Handle successful emissions
      next: (retrievedHero: Hero) => {

        // Set the values of the hero form using data from the retrieved Hero object
        this.heroForm.get('id')?.setValue(retrievedHero.id),
        this.heroForm.get('firstName')?.setValue(retrievedHero.firstName),
        this.heroForm.get('lastName')?.setValue(retrievedHero.lastName),
        this.heroForm.get('age')?.setValue(retrievedHero.age);
        if (retrievedHero.married)
          this.heroForm.get('maritalStatus')?.setValue('M');
        else
          this.heroForm.get('maritalStatus')?.setValue('S');
        this.heroForm.get('job')?.setValue(retrievedHero.job);

        this.retrieveMessage = 'Hero successfully retrieved. Modify details in form above';

        // Update messages on the form and button to indicate 
        // that we are now modifying details of an existing hero
        // rather than creating a new one
        this.formActionMessage = "Modify details for an existing hero";
        this.formButtonMessage = "Modify existing hero";
      },

      // Handle errors in response
      error: (errorVal: HttpErrorResponse) => {
        console.error('Request failed !');
        this.retrieveMessage = "The hero with id " + heroId + " does not exist";

      },

      // Handle completion of stream
      complete: () => {
        console.log('Request completed');
      }

    });
  }



  retrieveAllHeroes() {

    this.localAPIService.getAllHeroes().subscribe(
      // Register just one callback to handle successful emission 
      // of values (i.e. the returned response)
      (val: Hero[]) => {
        this.allHeroes = val;
      }
    );

  }



}
