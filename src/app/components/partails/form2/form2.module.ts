import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form2Component } from './form2.component';

@NgModule({
  declarations: [Form2Component],
  imports: [
	CommonModule,
	ReactiveFormsModule
  ], exports:[Form2Component]
})
export class Form2Module { }
