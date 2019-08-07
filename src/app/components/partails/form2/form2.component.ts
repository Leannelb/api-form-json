import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
	profileForm = this.fb.group({
		firstName: ['', Validators.required],
		lastName: [''],
		address: this.fb.group({
		  street: [''],
		  city: [''],
		  state: [''],
		  zip: ['']
		}),
		aliases: this.fb.array([
		  this.fb.control('')
		])
	  });
	
	  constructor(private fb: FormBuilder) { }
	

onSubmit() {
	// TODO: Use EventEmitter with form value
	console.warn(this.profileForm.value);
  }
  get aliases() {
	return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
	this.aliases.push(this.fb.control(''));
  }
}