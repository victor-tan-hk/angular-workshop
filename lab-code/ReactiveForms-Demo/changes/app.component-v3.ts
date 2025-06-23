import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Need to import FormControl, FormGroup and ReactiveFormsModule
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',

  /* Include the ReactiveFormsModule 
  in the imports metadata */
  imports: [RouterOutlet, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // Create a new FormGroup with nested FormControls and also
  // a nested FormGroup
  profileForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  });

  // implement logic to process submitted form data
  onSubmit() {

    // Returns an object whose keys are the form control names
    // and values are the contents of the text fields
    // With nested form groups present, the keys are the form group names
    // and value is an object whose keys / values are the 
    // form control names and contents of the nested elements
    console.log(this.profileForm.value);

    // Accessing a FormControl object 
    // with that specified name within the main FormGroup object
    console.log("FormControl object for first name is : " , this.profileForm.get("firstname"));

    //Gets the content / value of the FormControl object
    // Notice we need to use the safe navigation operator
    // since the get method could potentially return null
    console.log(this.profileForm.get("firstname")?.value);

    // Shorter form of the above
    console.log(this.profileForm.value.firstname);

    // Accessing a FormControl within the nested FormGroup object
    console.log("FormControl object for address street is : ", this.profileForm.get("address")?.get("street"));

    // Getting the value of the nested object
    console.log(this.profileForm.get("address")?.get("street")?.value);

    // Shortcut for the above
    console.log(this.profileForm.value.address?.street);
  }

}
