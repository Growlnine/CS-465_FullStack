import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})

export class EditTrip implements OnInit {
  editForm!: FormGroup;
  submitted = false;

constructor(
  private formBuilder: FormBuilder,
  private router: Router,
  private tripService: TripData
) { }

ngOnInit() {
  this.editForm = this.formBuilder.group({
    _id: [],
    code: ['', Validators.required],
    name: ['', Validators.required],
    length: ['', Validators.required],
    start: ['', Validators.required],
    resort: ['', Validators.required],
    perPerson: ['', Validators.required],
    image: ['', Validators.required],
    description: ['', Validators.required],
  })
}

public onSubmit() {
  this.submitted = true;
  if(this.editForm.valid){
    this.tripService.updateTrip(this.editForm.value)
    .subscribe( {
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['']);
},

    error: (error: any) => {
      console.log('Error: ' + error);
    }});
  }
}

// get the form short name to access the form fields
get f() { return this.editForm.controls; }

}