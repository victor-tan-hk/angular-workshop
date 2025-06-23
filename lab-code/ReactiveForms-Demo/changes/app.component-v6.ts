import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Need to import FormControl, FormGroup, Validators and ReactiveFormsModule
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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

    // A non-empty string is required, with a minimum length of 3 characters
    firstname: new FormControl('',[Validators.required,Validators.minLength(3)]),

    // A non-empty string is required, with a maximum length of 6 characters
    lastname: new FormControl('',[Validators.required,Validators.maxLength(6)]),

    // A non-empty string is required, in the form of a valid email address    
    email: new FormControl('',[Validators.required,Validators.email]),

    // A number between 18 and 70 is required
    age : new FormControl(0,[Validators.required,Validators.min(18),Validators.max(70)]),

    // This has no validators so it is optional (i.e. can be empty)
    job: new FormControl('')
  });

  // implement logic to process submitted form data
  onSubmit() {
    console.log(this.profileForm.value);
  }



}
