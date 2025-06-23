import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Need to import FormGroup, FormBuilder, FormArray, FormControl and ReactiveFormsModule
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';

// Need to import CommonModule as we are using 
// @if and @for
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  
  
  /* Include the ReactiveFormsModule and CommonModule
  in the imports metadata */
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  profileForm: FormGroup;

  // Array of strings for radio button choices
  languages = ['Java', 'Python', 'C#', 'PHP'];

  // Array of strings representing check box choices
  // in the sequence that they appear
  carNames = ['Mazda', 'Citroen', 'Bentley', 'Ford'];


  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      favlanguage: [''],
      favcars : this.fb.array([])
    });

    // initialize the favcars FormArray with FormControls 
    // whose initial values are false. These will 
    // represent unticked checkboxes, whereby
    // there is be a matching FormControl for each item 
    // in carNames
    for (let data of this.carNames) {
      this.favcars.push(new FormControl(false));
    }

  }


  get favcars() {
    return this.profileForm.get('favcars') as FormArray;
  }

  onSubmit() {

    console.log("The form's actual value ", this.profileForm.value);
    console.log("The favourite language chosen is " , this.profileForm.value.favlanguage);
    console.log("The array of checkbox values are ", this.profileForm.value.favcars)

    // Basic logic to translate from array of boolean values
    // into actual car names 
    let actualChosenCars = [];
    for (let i = 0; i < this.profileForm.value.favcars.length; i++) {
      if (this.profileForm.value.favcars[i]) {
        actualChosenCars.push(this.carNames[i]);
      }
    } 

    console.log("The actual selected cars based on that array are ", actualChosenCars);

  }

}
