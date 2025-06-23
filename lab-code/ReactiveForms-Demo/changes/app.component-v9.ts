import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Need to import FormBuilder, FormGroup, FormArray and ReactiveFormsModule
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

// Need to import CommonModule as we are using 
// @if and @for
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',

  /* Include the ReactiveFormsModule and CommonModule
  in the imports metadata */
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  profileForm: FormGroup;

  // Inject the FormBuilder as a service via
  // the constructor (to explore later in section on services)
  constructor(private fb: FormBuilder) {

    // Use the group method of FormBuilder to group the FormControls
    // within the main FormGroup
    this.profileForm = this.fb.group({

      // Remove validator functions temporarily to simplify demonstration
      // of FormArrays

      firstname: [''],
      lastname: [''],

      // Create an initially empty FormArray
      // using the FormBuilder array method
      jobs: this.fb.array([])

    });

  }


  // implement logic to process submitted form data
  onSubmit() {
    console.log(this.profileForm.value);
  }

  // Getter methods for the various FormControl objects
  // This simplifies accessing them in the template syntax
  // using the ngIf directive in the corresponding template

  get firstname() { return this.profileForm.get('firstname'); }

  get lastname() { return this.profileForm.get('lastname'); }

  get jobs() {
    return this.profileForm.get('jobs') as FormArray;
  }

  // Add a new Job FormGroup to the jobs FormArray
  addJob() {
    this.jobs.push(this.createNewJob());
  }

  // Create a new FormGroup with FormControls
  // representing info for a single new job
  createNewJob(): FormGroup {
    return this.fb.group({
      jobTitle: [''],
      years: [0],
    })

  }

  // Remove an existing Job FormGroup from the jobs FormArray
  // based on its index position in the FormArray
  removeJob(jobIndex: number) {
    this.jobs.removeAt(jobIndex);
  }

}
