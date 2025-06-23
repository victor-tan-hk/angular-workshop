import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Need to import FormControl and ReactiveFormsModule
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',

/*   Include the ReactiveFormsModule 
  in the imports metadata */
  imports: [RouterOutlet, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // Declaring a new FormControl class instance
  firstName = new FormControl('');


  resetFirstName() {
    // setValue() method updates the value of the form control 
    this.firstName.setValue('Superman');
  }

}
