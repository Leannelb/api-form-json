import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
	profileForm = new FormGroup({
		firstName: new FormControl('', Validators.required),
		lastName: new FormControl(''),
		address: new FormGroup({
		  street: new FormControl(''),
		  city: new FormControl(''),
		  state: new FormControl(''),
		  zip: new FormControl('')
		})
	  });

onSubmit() {
	// TODO: Use EventEmitter with form value
	console.warn(this.profileForm.value);
  }
}