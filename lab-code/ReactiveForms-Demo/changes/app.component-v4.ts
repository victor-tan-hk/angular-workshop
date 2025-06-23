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
// At the time of creation, we can also initialize it to 
// some default values
profileForm = new FormGroup({
  firstname: new FormControl('Anon'),
  lastname: new FormControl('Anon'),
  email: new FormControl('anon@anon.com'),
  address: new FormGroup({
    street: new FormControl('Some street'),
    city: new FormControl('Some city'),
    state: new FormControl('Some state'),
  })
});

// implement logic to process submitted form data
onSubmit() {
  console.log(this.profileForm.value);
}

setContentForEntireForm() {
  // Create an object with properties
  // that match the structure of the form exactly

  let supermanProfile = {
    firstname : 'Clark',
    lastname: 'Kent',
    email: 'superman@gmail.com',
    address : {
      street : '99 Louis Lane',
      city : 'Metropolis',
      state : 'New York',
    }

  };

  this.profileForm.setValue(supermanProfile);

}

setContentForPartOfForm() {

  let updatedProfile = {
    firstname : 'Tony',
    lastname: 'Stark',
    address : {
      street : '100 Stark Industries',
      state : 'California',
    }

  };
  this.profileForm.patchValue(updatedProfile);
}

changeFirstName() {
  this.profileForm.get("firstname")?.setValue('Thor');
}

clearFormValues() {
  this.profileForm.reset();
}


}
