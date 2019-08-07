import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	form: FormGroup;

	constructor() { }
  
	ngOnInit() {
	  this.form = new FormGroup ({
		name: new FormControl(''),
		username: new FormControl(''),
		email:  new FormControl(''),
		address: new FormControl(''),
		street: new FormControl(''),
		suite: new FormControl(''),
		city:  new FormControl(''),
		zipcode: new FormControl(''),
		phone: new FormControl(''),
		website: new FormControl('')
	  });
	}
  }
  