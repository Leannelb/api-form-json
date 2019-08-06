import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'form-partial',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
