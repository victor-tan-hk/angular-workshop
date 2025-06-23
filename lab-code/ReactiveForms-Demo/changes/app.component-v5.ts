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
});

// implement logic to process submitted form data
onSubmit() {
  console.log(this.profileForm.value);
}



}
