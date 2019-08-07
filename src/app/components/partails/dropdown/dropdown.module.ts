import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
	CommonModule,
	ReactiveFormsModule
  ], 
  exports:[
	  DropdownComponent
  ]
})
export class DropdownModule { }
